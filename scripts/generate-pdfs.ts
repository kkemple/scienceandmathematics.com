#!/usr/bin/env tsx
/**
 * Local PDF generator for posts (clean copies).
 *
 * - Writes PDFs to ./pdfs (gitignored) by default
 * - Does NOT include the Zenodo "Originally published at" line
 *
 * Usage:
 *   pnpm exec tsx scripts/generate-pdfs.ts
 *   OUT_DIR=public/pdfs pnpm exec tsx scripts/generate-pdfs.ts
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";

type Author = { name: string; orcid?: string };

type PostFrontmatter = {
  title?: string;
  description?: string;
  pubDate?: string;
  updatedDate?: string;
  authors?: Author[];
  zenodoDescription?: string;
};

const POSTS_DIR = path.resolve(process.cwd(), "src/content/posts");
const DEFAULT_OUT_DIR = path.resolve(process.cwd(), "pdfs");
const DEFAULT_AUTHOR = "Kurtis Kemple";

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function stripFrontmatter(markdown: string) {
  return markdown.replace(/^---[\s\S]*?\n---\n*/, "");
}

function extractFrontmatterBlock(markdown: string): string | null {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  return match ? match[1] : null;
}

// Minimal YAML frontmatter parser (matches patterns used in your repo)
function parseYamlFrontmatter(frontmatter: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const lines = frontmatter.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (!keyMatch) {
      i++;
      continue;
    }

    const key = keyMatch[1];
    let value = keyMatch[2].trim();

    // quoted string
    if (value.startsWith('"') || value.startsWith("'")) {
      const quote = value[0];
      if (value.length > 1 && value.endsWith(quote)) {
        result[key] = value.slice(1, -1);
      } else {
        let fullValue = value.slice(1);
        i++;
        while (i < lines.length) {
          const nextLine = lines[i];
          if (nextLine.trimEnd().endsWith(quote)) {
            fullValue += " " + nextLine.trimEnd().slice(0, -1);
            break;
          }
          fullValue += " " + nextLine.trim();
          i++;
        }
        result[key] = fullValue.trim();
      }
    }
    // array items (indented with -)
    else if (value === "" && i + 1 < lines.length && lines[i + 1].trim().startsWith("-")) {
      const items: unknown[] = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("-")) {
        const itemLine = lines[i].trim();
        // object item
        if (itemLine === "-" || itemLine.match(/^-\s*$/)) {
          const obj: Record<string, string> = {};
          i++;
          while (i < lines.length && lines[i].match(/^\s+\w+:/)) {
            const propMatch = lines[i].match(/^\s+(\w+):\s*['"]?([^'"]*?)['"]?\s*$/);
            if (propMatch) obj[propMatch[1]] = propMatch[2];
            i++;
          }
          items.push(obj);
          continue;
        }
        // simple item
        const simpleMatch = itemLine.match(/^-\s*['"]?([^'"]+?)['"]?\s*$/);
        if (simpleMatch) items.push(simpleMatch[1]);
        i++;
      }
      result[key] = items;
      continue;
    }
    // multiline strings (|)
    else if (value === "|" || value === ">") {
      const multilineContent: string[] = [];
      const preserveNewlines = value === "|";
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        if (nextLine.match(/^\s{2,}/) || nextLine.trim() === "") {
          multilineContent.push(nextLine.replace(/^\s{2}/, ""));
          i++;
        } else {
          break;
        }
      }
      result[key] = multilineContent.join(preserveNewlines ? "\n" : " ").trim();
      continue;
    }
    // plain value
    else {
      result[key] = value;
    }

    i++;
  }

  return result;
}

function readPost(filePath: string): { slug: string; markdown: string; frontmatter: PostFrontmatter } {
  const slug = path.basename(filePath).replace(/\.(md|mdx)$/, "");
  const markdown = fs.readFileSync(filePath, "utf-8");
  const fmBlock = extractFrontmatterBlock(markdown);
  const parsed = fmBlock ? parseYamlFrontmatter(fmBlock) : {};

  return {
    slug,
    markdown,
    frontmatter: {
      title: parsed.title as string | undefined,
      description: parsed.description as string | undefined,
      pubDate: parsed.pubDate as string | undefined,
      updatedDate: parsed.updatedDate as string | undefined,
      authors: parsed.authors as Author[] | undefined,
      zenodoDescription: parsed.zenodoDescription as string | undefined,
    },
  };
}

function normalizeMarkdownForPdf(markdown: string, postFilePath: string): string {
  let content = stripFrontmatter(markdown);
  const postDir = path.dirname(postFilePath);

  // Convert images to absolute filesystem paths for pandoc/LaTeX
  // Strip external images (can cause LaTeX errors/timeouts)
  content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (_match, alt, urlRaw) => {
    const url = String(urlRaw).trim();
    if (url.startsWith("http://") || url.startsWith("https://")) return "";
    if (url.startsWith("data:")) return "";

    // Astro public images
    if (url.startsWith("/images/")) {
      const absolutePath = path.resolve(process.cwd(), "public" + url);
      return `![${alt}](${absolutePath})`;
    }

    // Relative images (e.g. ./_assets/foo.png)
    if (!url.startsWith("/")) {
      const absolutePath = path.resolve(postDir, url);
      return `![${alt}](${absolutePath})`;
    }

    // Unknown absolute path (strip)
    return "";
  });

  return content;
}

function escapeYamlString(input: string): string {
  return input.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildPandocMarkdown(opts: {
  title: string;
  author: string;
  date: string;
  abstract: string;
  content: string;
}): string {
  const indentedAbstract = opts.abstract
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");

  return `---
title: "${escapeYamlString(opts.title)}"
author: "${escapeYamlString(opts.author)}"
date: "${escapeYamlString(opts.date)}"
abstract: |
${indentedAbstract}
geometry: margin=1in
fontsize: 11pt
urlcolor: blue
linkcolor: blue
header-includes:
  - \\usepackage{amsmath}
  - \\usepackage{amssymb}
  - \\usepackage{amsthm}
  - \\usepackage{graphicx}
  - \\usepackage{float}
  - \\usepackage[font=small,labelfont=bf,justification=centering]{caption}
  - \\setkeys{Gin}{width=0.6\\textwidth,keepaspectratio}
  - \\makeatletter
  - \\def\\fps@figure{H}
  - \\makeatother
---

${opts.content}
`;
}

function generatePdfToFile(params: {
  slug: string;
  sourcePath: string;
  markdown: string;
  frontmatter: PostFrontmatter;
  outDir: string;
}) {
  const title = params.frontmatter.title || params.slug;
  const author = params.frontmatter.authors?.[0]?.name || DEFAULT_AUTHOR;
  const date = params.frontmatter.pubDate || new Date().toISOString().slice(0, 10);
  const abstract = params.frontmatter.zenodoDescription || params.frontmatter.description || "";

  const content = normalizeMarkdownForPdf(params.markdown, params.sourcePath);

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "post-pdf-"));
  const inputPath = path.join(tempDir, `${params.slug}.md`);
  const outputPath = path.join(tempDir, `${params.slug}.pdf`);

  const pandocMarkdown = buildPandocMarkdown({ title, author, date, abstract, content });
  fs.writeFileSync(inputPath, pandocMarkdown, "utf-8");

  try {
    execSync(`pandoc "${inputPath}" -o "${outputPath}" --pdf-engine=xelatex -V colorlinks=true`, {
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 180000,
    });

    ensureDir(params.outDir);
    const finalPath = path.join(params.outDir, `${params.slug}.pdf`);
    fs.copyFileSync(outputPath, finalPath);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function listPostFiles(): string[] {
  const entries = fs.readdirSync(POSTS_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => (name.endsWith(".md") || name.endsWith(".mdx")) && !name.startsWith("_"))
    .map((name) => path.join(POSTS_DIR, name));
}

async function main() {
  const outDir = process.env.OUT_DIR
    ? path.resolve(process.cwd(), process.env.OUT_DIR)
    : DEFAULT_OUT_DIR;

  const postFiles = listPostFiles();
  console.log(`🧾 Found ${postFiles.length} posts`);
  console.log(`📁 Writing PDFs to: ${outDir}`);

  let ok = 0;
  const failures: Array<{ slug: string; error: string }> = [];

  for (const filePath of postFiles) {
    const { slug, markdown, frontmatter } = readPost(filePath);
    try {
      generatePdfToFile({ slug, sourcePath: filePath, markdown, frontmatter, outDir });
      ok++;
      console.log(`  ✓ ${slug}.pdf`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      failures.push({ slug, error: message });
      console.error(`  ✗ ${slug}: ${message}`);
    }
  }

  console.log(`\n✅ PDFs generated: ${ok}/${postFiles.length}`);
  if (failures.length) {
    console.log("\nFailures:");
    failures.forEach((f) => console.log(`- ${f.slug}: ${f.error}`));
    process.exitCode = 1;
  }
}

main();
