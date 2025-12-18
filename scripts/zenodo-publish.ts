#!/usr/bin/env tsx
/**
 * Zenodo Publishing Script
 *
 * Creates or updates a Zenodo deposition for a blog post, reserves a DOI,
 * uploads PDF, and optionally publishes. Auto-updates post frontmatter.
 *
 * Usage:
 *   ZENODO_TOKEN=xxx pnpm zenodo <post-slug> [options]
 *
 * Options:
 *   --info           Show current Zenodo metadata (keywords, description, etc.)
 *   --sandbox        Use sandbox.zenodo.org (recommended for testing)
 *   --publish        Actually publish (otherwise creates/updates draft only)
 *   --update <id>    Update existing deposition instead of creating new
 *   --no-write       Don't auto-update the post frontmatter
 *
 * Examples:
 *   # View current Zenodo metadata:
 *   ZENODO_TOKEN=xxx pnpm zenodo the-thermodynamic-computational-speed-limit --info
 *
 *   # Create new draft on sandbox:
 *   ZENODO_TOKEN=xxx pnpm zenodo the-thermodynamic-computational-speed-limit --sandbox
 *
 *   # Update existing draft:
 *   ZENODO_TOKEN=xxx pnpm zenodo the-thermodynamic-computational-speed-limit --update 17979194
 *
 *   # Create and publish (DOI becomes permanent):
 *   ZENODO_TOKEN=xxx pnpm zenodo the-thermodynamic-computational-speed-limit --publish
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SANDBOX_BASE = "https://sandbox.zenodo.org";
const PRODUCTION_BASE = "https://zenodo.org";

// Site configuration (matches your config.ts)
const SITE_URL = "https://scienceandmathematics.com";
const DEFAULT_AUTHOR = "Kurtis Kemple";

// Types
interface PostFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  updatedDate?: string;
  type?: string;
  authors?: Array<{ name: string; orcid?: string }>;
  keywords?: string[];
  doi?: string;
  zenodoUrl?: string;
  zenodoDepositionId?: number;
  zenodoDescription?: string;
}

interface ZenodoCreator {
  name: string;
  orcid?: string;
  affiliation?: string;
}

interface ZenodoMetadata {
  prereserve_doi?: {
    doi: string;
    recid: number;
  };
  title?: string;
  description?: string;
  creators?: Array<{ name: string; orcid?: string; affiliation?: string }>;
  keywords?: string[];
  subjects?: Array<{ term: string; identifier?: string; scheme?: string }>;
  publication_date?: string;
  upload_type?: string;
  publication_type?: string;
  access_right?: string;
  license?: string;
  related_identifiers?: Array<{ identifier: string; relation: string; resource_type?: string }>;
  dates?: Array<{ start?: string; end?: string; date?: string; type: string | { id: string }; description?: string }>;
}

interface ZenodoFile {
  id: string;
  filename: string;
  filesize: number;
  checksum: string;
}

interface ZenodoDeposition {
  id: number;
  links: {
    bucket: string;
    self: string;
    publish: string;
    html: string;
    latest_draft?: string;
  };
  metadata: ZenodoMetadata;
  files?: ZenodoFile[];
  doi?: string;
  doi_url?: string;
  state: "unsubmitted" | "done" | "error";
  submitted: boolean;
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    postSlug: "",
    sandbox: false,
    publish: false,
    info: false,
    updateId: null as number | null,
    autoWrite: true,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--sandbox") {
      options.sandbox = true;
    } else if (arg === "--publish") {
      options.publish = true;
    } else if (arg === "--info") {
      options.info = true;
    } else if (arg === "--update" && args[i + 1]) {
      options.updateId = parseInt(args[++i], 10);
    } else if (arg === "--no-write") {
      options.autoWrite = false;
    } else if (!arg.startsWith("--")) {
      options.postSlug = arg;
    }
  }

  return options;
}

// Proper YAML frontmatter parser
function parseYamlFrontmatter(frontmatter: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const lines = frontmatter.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // Check for key: value pattern
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (!keyMatch) {
      i++;
      continue;
    }

    const key = keyMatch[1];
    let value = keyMatch[2].trim();

    // Handle quoted strings (single or double)
    if (value.startsWith('"') || value.startsWith("'")) {
      const quote = value[0];
      // Check if it ends on same line
      if (value.length > 1 && value.endsWith(quote)) {
        result[key] = value.slice(1, -1);
      } else {
        // Multi-line quoted string
        let fullValue = value.slice(1); // Remove opening quote
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
    // Handle arrays (simple single-line detection)
    else if (value.startsWith("[")) {
      // Simple array like ["a", "b"]
      try {
        result[key] = JSON.parse(value.replace(/'/g, '"'));
      } catch {
        result[key] = value;
      }
    }
    // Handle array items (indented with -)
    else if (value === "" && i + 1 < lines.length && lines[i + 1].trim().startsWith("-")) {
      const items: unknown[] = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith("-")) {
        const itemLine = lines[i].trim();
        // Check if it's an object (has nested properties)
        if (itemLine === "-" || itemLine.match(/^-\s*$/)) {
          // Object item - collect indented properties
          const obj: Record<string, string> = {};
          i++;
          while (i < lines.length && lines[i].match(/^\s+\w+:/)) {
            const propMatch = lines[i].match(/^\s+(\w+):\s*['"]?([^'"]*?)['"]?\s*$/);
            if (propMatch) {
              obj[propMatch[1]] = propMatch[2];
            }
            i++;
          }
          items.push(obj);
          continue;
        }
        // Simple item like "- value"
        const simpleMatch = itemLine.match(/^-\s*['"]?([^'"]+?)['"]?\s*$/);
        if (simpleMatch) {
          items.push(simpleMatch[1]);
        }
        i++;
      }
      result[key] = items;
      continue;
    }
    // Handle YAML multiline strings (| or >)
    else if (value === "|" || value === ">") {
      const multilineContent: string[] = [];
      const preserveNewlines = value === "|";
      i++;
      // Collect indented lines
      while (i < lines.length) {
        const nextLine = lines[i];
        // Check if line is indented (part of multiline block) or empty
        if (nextLine.match(/^\s{2,}/) || nextLine.trim() === "") {
          multilineContent.push(nextLine.replace(/^\s{2}/, "")); // Remove 2-space indent
          i++;
        } else if (nextLine.match(/^\s/) && !nextLine.match(/^\w+:/)) {
          // Still indented but not a new key
          multilineContent.push(nextLine.trimStart());
          i++;
        } else {
          break;
        }
      }
      result[key] = multilineContent.join(preserveNewlines ? "\n" : " ").trim();
      continue;
    }
    // Plain value
    else {
      result[key] = value;
    }

    i++;
  }

  return result;
}

// Read and parse post frontmatter
function readPostFrontmatter(slug: string): { frontmatter: PostFrontmatter; filePath: string; rawContent: string } | null {
  const postsDir = path.resolve(__dirname, "../src/content/posts");

  // Try both .md and .mdx extensions
  const mdPath = path.join(postsDir, `${slug}.md`);
  const mdxPath = path.join(postsDir, `${slug}.mdx`);

  let filePath: string | null = null;
  if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  }

  if (!filePath) {
    return null;
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");

  // Extract frontmatter between --- markers
  const match = rawContent.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return null;
  }

  const parsed = parseYamlFrontmatter(match[1]);

  return {
    frontmatter: {
      title: (parsed.title as string) || slug,
      description: (parsed.description as string) || "",
      pubDate: (parsed.pubDate as string) || new Date().toISOString().split("T")[0],
      updatedDate: parsed.updatedDate as string | undefined,
      type: parsed.type as string | undefined,
      authors: parsed.authors as Array<{ name: string; orcid?: string }> | undefined,
      keywords: parsed.keywords as string[] | undefined,
      doi: parsed.doi as string | undefined,
      zenodoUrl: parsed.zenodoUrl as string | undefined,
      zenodoDepositionId: parsed.zenodoDepositionId as number | undefined,
      zenodoDescription: parsed.zenodoDescription as string | undefined,
    },
    filePath,
    rawContent,
  };
}

// Update post frontmatter with DOI info
function updatePostFrontmatter(
  filePath: string,
  rawContent: string,
  doi: string,
  zenodoUrl: string,
  depositionId: number
): void {
  // Find the frontmatter section
  const match = rawContent.match(/^(---\n)([\s\S]*?)(\n---)/);
  if (!match) {
    console.error("   ⚠️  Could not parse frontmatter for auto-update");
    return;
  }

  let frontmatterContent = match[2];

  // Helper to update or add a field
  const updateField = (content: string, key: string, value: string | number): string => {
    const regex = new RegExp(`^${key}:.*$`, "m");
    const newLine = `${key}: ${typeof value === "string" ? `"${value}"` : value}`;

    if (regex.test(content)) {
      return content.replace(regex, newLine);
    } else {
      // Add after pubDate or at the end
      const pubDateMatch = content.match(/^pubDate:.*$/m);
      if (pubDateMatch) {
        return content.replace(pubDateMatch[0], `${pubDateMatch[0]}\n${newLine}`);
      }
      return content + "\n" + newLine;
    }
  };

  frontmatterContent = updateField(frontmatterContent, "doi", doi);
  frontmatterContent = updateField(frontmatterContent, "zenodoUrl", zenodoUrl);
  frontmatterContent = updateField(frontmatterContent, "zenodoDepositionId", depositionId);

  const newContent = rawContent.replace(
    /^---\n[\s\S]*?\n---/,
    `---\n${frontmatterContent}\n---`
  );

  fs.writeFileSync(filePath, newContent, "utf-8");
  console.log(`   ✓ Updated frontmatter in ${path.basename(filePath)}`);
}

// Zenodo API functions
class ZenodoClient {
  private baseUrl: string;
  private token: string;

  constructor(sandbox: boolean, token: string) {
    this.baseUrl = sandbox ? SANDBOX_BASE : PRODUCTION_BASE;
    this.token = token;
  }

  private async request<T>(
    method: string,
    endpoint: string,
    body?: object,
    retries = 3
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : undefined,
        });

        if (response.ok) {
          // Handle empty responses (e.g., DELETE returns 204 No Content)
          const text = await response.text();
          if (!text) {
            return undefined as T;
          }
          return JSON.parse(text) as T;
        }

        // Retry on 5xx server errors
        if (response.status >= 500 && attempt < retries) {
          console.log(`   ⚠️  API error (${response.status}), retrying in ${attempt * 3}s...`);
          await new Promise((resolve) => setTimeout(resolve, attempt * 3000));
          continue;
        }

        const errorText = await response.text();
        throw new Error(`Zenodo API error (${response.status}): ${errorText}`);
      } catch (error) {
        // Retry on network errors
        if (attempt < retries && error instanceof Error && !error.message.includes("Zenodo API error")) {
          console.log(`   ⚠️  Network error, retrying in ${attempt * 3}s...`);
          await new Promise((resolve) => setTimeout(resolve, attempt * 3000));
          continue;
        }
        throw error;
      }
    }

    throw new Error("Request failed after retries");
  }

  async getDeposition(id: number): Promise<ZenodoDeposition> {
    console.log(`📖 Fetching existing deposition ${id}...`);
    return this.request<ZenodoDeposition>("GET", `/api/deposit/depositions/${id}`);
  }

  async createDeposition(): Promise<ZenodoDeposition> {
    console.log("📝 Creating draft deposition and reserving DOI...");

    const deposition = await this.request<ZenodoDeposition>(
      "POST",
      "/api/deposit/depositions",
      { metadata: { prereserve_doi: true } }
    );

    console.log(`   ✓ Deposition created: ID ${deposition.id}`);
    console.log(`   ✓ Reserved DOI: ${deposition.metadata.prereserve_doi?.doi}`);

    return deposition;
  }

  async unlockDeposition(id: number): Promise<ZenodoDeposition> {
    console.log(`🔓 Unlocking deposition ${id} for editing...`);
    return this.request<ZenodoDeposition>(
      "POST",
      `/api/deposit/depositions/${id}/actions/edit`
    );
  }

  async uploadFile(
    bucketUrl: string,
    fileContent: Buffer | string,
    fileName: string,
    retries = 3
  ): Promise<void> {
    console.log(`📤 Uploading file: ${fileName}...`);

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(`${bucketUrl}/${fileName}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/octet-stream",
          },
          body: fileContent,
        });

        if (response.ok) {
          console.log(`   ✓ File uploaded successfully`);
          return;
        }

        // Check for retryable errors (5xx server errors)
        if (response.status >= 500 && attempt < retries) {
          console.log(`   ⚠️  Upload failed (${response.status}), retrying in ${attempt * 2}s...`);
          await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
          continue;
        }

        const errorText = await response.text();
        throw new Error(`File upload failed (${response.status}): ${errorText}`);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));

        // Retry on network errors
        if (attempt < retries && !lastError.message.includes("File upload failed")) {
          console.log(`   ⚠️  Upload error, retrying in ${attempt * 2}s...`);
          await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
          continue;
        }

        throw lastError;
      }
    }

    throw lastError || new Error("Upload failed after retries");
  }

  async deleteFile(depositionId: number, fileId: string): Promise<void> {
    await this.request<void>(
      "DELETE",
      `/api/deposit/depositions/${depositionId}/files/${fileId}`
    );
  }

  async listFiles(depositionId: number): Promise<Array<{ id: string; filename: string }>> {
    return this.request<Array<{ id: string; filename: string }>>(
      "GET",
      `/api/deposit/depositions/${depositionId}/files`
    );
  }

  async updateMetadata(
    depositionId: number,
    metadata: object
  ): Promise<ZenodoDeposition> {
    console.log("📋 Updating deposition metadata...");

    const deposition = await this.request<ZenodoDeposition>(
      "PUT",
      `/api/deposit/depositions/${depositionId}`,
      { metadata }
    );

    console.log(`   ✓ Metadata updated`);
    return deposition;
  }

  async publish(depositionId: number): Promise<ZenodoDeposition> {
    console.log("🚀 Publishing deposition...");

    const deposition = await this.request<ZenodoDeposition>(
      "POST",
      `/api/deposit/depositions/${depositionId}/actions/publish`
    );

    console.log(`   ✓ Published!`);
    console.log(`   ✓ Final DOI: ${deposition.doi}`);
    console.log(`   ✓ DOI URL: ${deposition.doi_url}`);

    return deposition;
  }

  getRecordUrl(depositionId: number): string {
    return `${this.baseUrl}/records/${depositionId}`;
  }

  getEditUrl(depositionId: number): string {
    return `${this.baseUrl}/deposit/${depositionId}`;
  }

  get base(): string {
    return this.baseUrl;
  }
}

// Generate PDF from markdown using pandoc
function generatePdf(
  markdown: string,
  frontmatter: PostFrontmatter,
  slug: string
): string {
  const title = frontmatter.title;
  const author = frontmatter.authors?.[0]?.name || DEFAULT_AUTHOR;
  const date = frontmatter.pubDate;
  // Use zenodoDescription for PDF abstract if available
  const abstract = frontmatter.zenodoDescription || frontmatter.description;

  // Remove frontmatter from content
  const content = markdown.replace(/^---[\s\S]*?---\n*/, "");

  // Create temp directory for pandoc work
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "zenodo-pdf-"));
  const inputPath = path.join(tempDir, `${slug}.md`);
  const outputPath = path.join(tempDir, `${slug}.pdf`);

  // Build markdown with metadata header for pandoc
  // Include amsmath packages for math support
  // Properly indent multiline abstract for YAML
  const indentedAbstract = abstract
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");

  const pandocMarkdown = `---
title: "${title.replace(/"/g, '\\"')}"
author: "${author}"
date: "${date}"
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
---

*Originally published at: ${SITE_URL}/${slug}/*

---

${content}
`;

  // Write temp markdown file
  fs.writeFileSync(inputPath, pandocMarkdown, "utf-8");

  try {
    // Run pandoc to generate PDF
    // Using xelatex engine for better Unicode support (math symbols in abstract)
    execSync(
      `pandoc "${inputPath}" -o "${outputPath}" --pdf-engine=xelatex -V colorlinks=true`,
      {
        stdio: ["pipe", "pipe", "pipe"],
        timeout: 120000, // 120 second timeout for PDF generation (xelatex is slower)
      }
    );

    // Read the generated PDF
    const pdfBuffer = fs.readFileSync(outputPath);

    // Clean up temp files
    fs.rmSync(tempDir, { recursive: true, force: true });

    return pdfBuffer.toString("base64");
  } catch (error) {
    // Clean up on error
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw new Error(
      `PDF generation failed: ${error instanceof Error ? error.message : error}`
    );
  }
}

// Build Zenodo metadata from post frontmatter
function buildZenodoMetadata(
  post: PostFrontmatter,
  slug: string
): object {
  // Format author name as "Last, First" for Zenodo
  const formatAuthorName = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      const last = parts.pop();
      return `${last}, ${parts.join(" ")}`;
    }
    return name;
  };

  // Build creators array
  const creators: ZenodoCreator[] = post.authors?.length
    ? post.authors.map((a) => ({
        name: formatAuthorName(a.name),
        ...(a.orcid ? { orcid: a.orcid } : {}),
      }))
    : [{ name: formatAuthorName(DEFAULT_AUTHOR) }];

  // Map post type to Zenodo publication type
  const publicationType =
    post.type === "paper"
      ? "preprint"
      : post.type === "review"
        ? "review"
        : "other";

  // Build dates array for Zenodo (requires start/end format)
  const dates: Array<{ start: string; end: string; type: string; description?: string }> = [
    {
      start: post.pubDate,
      end: post.pubDate,
      type: "Available",
      description: "First published on scienceandmathematics.com",
    },
  ];

  // Add updated date if present
  if (post.updatedDate) {
    dates.push({
      start: post.updatedDate,
      end: post.updatedDate,
      type: "Updated",
      description: "Content updated",
    });
  }

  return {
    prereserve_doi: true,
    upload_type: "publication",
    publication_type: publicationType,
    title: post.title,
    publication_date: post.pubDate,
    // Use zenodoDescription for full abstract, fallback to description
    description: `<p>${post.zenodoDescription || post.description}</p>`,
    creators,
    access_right: "open",
    license: "cc-by-4.0",
    related_identifiers: [
      {
        identifier: `${SITE_URL}/${slug}/`,
        relation: "isIdenticalTo",
        resource_type: "publication-other",
      },
    ],
    keywords: post.keywords || [],
    dates,
  };
}

// Display Zenodo deposition info
function displayDepositionInfo(
  deposition: ZenodoDeposition,
  frontmatter: PostFrontmatter
): void {
  const meta = deposition.metadata;
  const doi = deposition.doi || meta.prereserve_doi?.doi || "Not assigned";

  console.log("\n══════════════════════════════════════════════════════════════");
  console.log("  📋 ZENODO DEPOSITION INFO");
  console.log("══════════════════════════════════════════════════════════════");
  console.log(`  ID:           ${deposition.id}`);
  console.log(`  Status:       ${deposition.submitted ? "✅ Published" : "📝 Draft"}`);
  console.log(`  DOI:          ${doi}`);
  console.log("══════════════════════════════════════════════════════════════\n");

  console.log("📄 METADATA ON ZENODO:");
  console.log("─────────────────────────────────────────────────────────────");
  console.log(`  Title:        ${meta.title || "(not set)"}`);
  console.log(`  Date:         ${meta.publication_date || "(not set)"}`);
  console.log(`  Type:         ${meta.upload_type || "(not set)"}${meta.publication_type ? ` / ${meta.publication_type}` : ""}`);
  console.log(`  License:      ${meta.license || "(not set)"}`);

  console.log("\n  Description:");
  if (meta.description) {
    // Strip HTML and truncate for display
    const plainDesc = meta.description.replace(/<[^>]*>/g, "").trim();
    const truncated = plainDesc.length > 200 ? plainDesc.slice(0, 200) + "..." : plainDesc;
    console.log(`    ${truncated}`);
  } else {
    console.log("    (not set)");
  }

  console.log("\n  Authors:");
  if (meta.creators?.length) {
    meta.creators.forEach((c) => {
      console.log(`    - ${c.name}${c.orcid ? ` (ORCID: ${c.orcid})` : ""}${c.affiliation ? ` @ ${c.affiliation}` : ""}`);
    });
  } else {
    console.log("    (not set)");
  }

  console.log("\n  Keywords:");
  if (meta.keywords?.length) {
    console.log(`    ${meta.keywords.join(", ")}`);
  } else {
    console.log("    (not set)");
  }

  console.log("\n  Subjects:");
  if (meta.subjects?.length) {
    meta.subjects.forEach((s) => console.log(`    - ${s.term}`));
  } else {
    console.log("    (not set)");
  }

  console.log("\n  Dates:");
  if (meta.dates?.length) {
    meta.dates.forEach((d) => {
      // Zenodo may return dates in different formats
      const start = d.start;
      const end = d.end;
      const singleDate = d.date;
      const type = typeof d.type === "object" ? d.type.id : d.type;
      const description = d.description;
      // Use single date field, or start/end range
      const dateStr = singleDate || (start && end && start === end ? start : start && end ? `${start} - ${end}` : start || end || "(no date)");
      console.log(`    - ${type}: ${dateStr}${description ? ` (${description})` : ""}`);
    });
  } else {
    console.log("    (not set)");
  }

  if (deposition.files?.length) {
    console.log("\n  Files:");
    deposition.files.forEach((f) => {
      const sizeKb = Math.round(f.filesize / 1024);
      console.log(`    - ${f.filename} (${sizeKb} KB)`);
    });
  }

  console.log("\n─────────────────────────────────────────────────────────────");
  console.log("📝 LOCAL FRONTMATTER:");
  console.log("─────────────────────────────────────────────────────────────");
  console.log(`  Title:        ${frontmatter.title}`);
  console.log(`  Date:         ${frontmatter.pubDate}`);
  console.log(`  Description:  ${frontmatter.description.slice(0, 80)}...`);

  if (frontmatter.zenodoDescription) {
    console.log("\n  Zenodo Description (will be used for Zenodo):");
    const truncated = frontmatter.zenodoDescription.length > 300
      ? frontmatter.zenodoDescription.slice(0, 300) + "..."
      : frontmatter.zenodoDescription;
    console.log(`    ${truncated}`);
  } else {
    console.log(`  Zenodo Desc:  (not set - will use description)`);
  }

  console.log(`\n  Keywords:     ${frontmatter.keywords?.join(", ") || "(not set)"}`);
  console.log(`  Authors:      ${frontmatter.authors?.map((a) => a.name).join(", ") || "(using default)"}`);

  console.log("\n══════════════════════════════════════════════════════════════");
  console.log("  💡 To update Zenodo with local frontmatter, run without --info");
  console.log("══════════════════════════════════════════════════════════════\n");
}

// Main execution
async function main() {
  const options = parseArgs();

  // Validate inputs
  if (!options.postSlug) {
    console.error("❌ Error: Post slug is required");
    console.error("\nUsage:");
    console.error("  ZENODO_TOKEN=xxx pnpm zenodo <post-slug> [options]");
    console.error("\nOptions:");
    console.error("  --info           Show current Zenodo metadata");
    console.error("  --sandbox        Use sandbox.zenodo.org for testing");
    console.error("  --publish        Publish (makes DOI permanent)");
    console.error("  --update <id>    Update existing deposition");
    console.error("  --no-write       Don't auto-update post frontmatter");
    console.error("\nExamples:");
    console.error("  pnpm zenodo the-thermodynamic-computational-speed-limit --info");
    console.error("  pnpm zenodo the-thermodynamic-computational-speed-limit --sandbox");
    console.error("  pnpm zenodo the-thermodynamic-computational-speed-limit --update 17979194");
    process.exit(1);
  }

  const token = process.env.ZENODO_TOKEN;
  if (!token) {
    console.error("❌ Error: ZENODO_TOKEN environment variable is required");
    console.error("\nGet a token from: https://zenodo.org/account/settings/applications/");
    process.exit(1);
  }

  // Read post
  const postData = readPostFrontmatter(options.postSlug);
  if (!postData) {
    console.error(`❌ Error: Post not found: ${options.postSlug}`);
    const postsDir = path.resolve(__dirname, "../src/content/posts");
    const files = fs.readdirSync(postsDir);
    console.error("\nAvailable posts:");
    files
      .filter((f) => !f.startsWith("_") && (f.endsWith(".md") || f.endsWith(".mdx")))
      .forEach((f) => console.error(`  - ${f.replace(/\.(md|mdx)$/, "")}`));
    process.exit(1);
  }

  const { frontmatter, filePath, rawContent } = postData;

  // Check for existing deposition in frontmatter
  const existingId = options.updateId || frontmatter.zenodoDepositionId;

  // Handle --info mode
  if (options.info) {
    if (!existingId) {
      console.error("❌ Error: No Zenodo deposition found for this post.");
      console.error("   Run without --info first to create a deposition.");
      process.exit(1);
    }

    try {
      const client = new ZenodoClient(options.sandbox, token);
      const deposition = await client.getDeposition(existingId);
      displayDepositionInfo(deposition, frontmatter);
    } catch (error) {
      console.error("\n❌ Error:", error instanceof Error ? error.message : error);
      process.exit(1);
    }
    return;
  }

  console.log("\n══════════════════════════════════════════════════════════════");
  console.log("  Zenodo Publishing Script");
  console.log("══════════════════════════════════════════════════════════════");
  console.log(`  Post:     ${frontmatter.title}`);
  console.log(`  Date:     ${frontmatter.pubDate}`);
  console.log(`  Mode:     ${options.sandbox ? "🧪 SANDBOX" : "🔴 PRODUCTION"}`);
  console.log(`  Action:   ${existingId ? `Update #${existingId}` : "Create New"} ${options.publish ? "+ Publish" : "(Draft)"}`);
  console.log("══════════════════════════════════════════════════════════════\n");

  // Confirm production publish
  if (!options.sandbox && options.publish && !existingId) {
    console.log("⚠️  WARNING: You are about to PUBLISH to production Zenodo.");
    console.log("   Once published, the DOI cannot be deleted.");
    console.log("   Press Ctrl+C within 5 seconds to cancel...\n");
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  try {
    const client = new ZenodoClient(options.sandbox, token);

    let deposition: ZenodoDeposition;
    let doi: string;

    if (existingId) {
      // Update existing deposition
      deposition = await client.getDeposition(existingId);

      // If published, we need to create a new version or unlock for editing
      if (deposition.submitted) {
        console.log("   ℹ️  Deposition is published, unlocking for new version...");
        deposition = await client.unlockDeposition(existingId);
      }

      doi = deposition.metadata.prereserve_doi?.doi || deposition.doi || "";
      console.log(`   ✓ Existing DOI: ${doi}`);
    } else {
      // Create new deposition
      deposition = await client.createDeposition();
      doi = deposition.metadata.prereserve_doi!.doi;
    }

    // Generate and upload PDF file
    console.log("📄 Generating PDF with pandoc...");
    const pdfBase64 = generatePdf(rawContent, frontmatter, options.postSlug);
    const pdfBuffer = Buffer.from(pdfBase64, "base64");
    const pdfFileName = `${options.postSlug}.pdf`;
    console.log(`   ✓ PDF generated (${Math.round(pdfBuffer.length / 1024)} KB)`);

    // Delete existing files if updating (both .pdf and .tex for backwards compat)
    if (existingId) {
      const files = await client.listFiles(deposition.id);
      for (const file of files) {
        if (file.filename.endsWith(".pdf") || file.filename.endsWith(".tex")) {
          console.log(`   Removing existing ${file.filename}...`);
          await client.deleteFile(deposition.id, file.id);
        }
      }
    }

    await client.uploadFile(deposition.links.bucket, pdfBuffer, pdfFileName);

    // Update metadata
    const metadata = buildZenodoMetadata(frontmatter, options.postSlug);
    await client.updateMetadata(deposition.id, metadata);

    // Publish if requested
    if (options.publish) {
      const published = await client.publish(deposition.id);
      doi = published.doi!;
    }

    // Auto-update frontmatter
    const zenodoUrl = client.getRecordUrl(deposition.id);
    if (options.autoWrite) {
      console.log("\n📝 Updating post frontmatter...");
      updatePostFrontmatter(filePath, rawContent, doi, zenodoUrl, deposition.id);
    }

    // Output results
    console.log("\n══════════════════════════════════════════════════════════════");
    console.log("  ✅ SUCCESS!");
    console.log("══════════════════════════════════════════════════════════════");
    console.log(`  DOI:          ${doi}`);
    console.log(`  DOI URL:      https://doi.org/${doi}`);
    console.log(`  Zenodo URL:   ${zenodoUrl}`);
    if (!options.publish) {
      console.log(`  Edit Draft:   ${client.getEditUrl(deposition.id)}`);
      console.log("\n  ⚠️  Draft created/updated but NOT published.");
      console.log("     Run with --publish to publish, or publish from Zenodo UI.");
    }
    console.log("══════════════════════════════════════════════════════════════\n");

  } catch (error) {
    console.error("\n❌ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
