import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Author schema for citation metadata
const authorSchema = z.object({
	name: z.string(),
	orcid: z
		.string()
		.regex(/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/, {
			message: "ORCID must be in format: 0000-0000-0000-0000",
		})
		.optional(),
});

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts/` directory.
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z
				.string()
				.min(80, {
					message:
						"Description should provide at least 80 characters of context.",
				})
				.max(220, {
					message:
						"Description should stay under 220 characters for meta tags.",
				}),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			image: z.string().optional(),
			type: z
				.enum(["note", "paper", "experiment", "analysis", "review"])
				.default("note"),

			// Citation metadata (optional - enables Zotero/Scholar support when present)
			doi: z
				.string()
				.regex(/^10\.\d{4,}\/[^\s]+$/, {
					message: "DOI must be in format: 10.XXXX/identifier",
				})
				.optional(),
			zenodoUrl: z
				.string()
				.url()
				.startsWith("https://zenodo.org/", {
					message: "Zenodo URL must start with https://zenodo.org/",
				})
				.optional(),
			zenodoDepositionId: z.number().optional(),
			zenodoDescription: z
				.string()
				.min(200, {
					message: "Zenodo description should be at least 200 characters for a proper abstract.",
				})
				.optional(),
			authors: z.array(authorSchema).optional(),
			keywords: z.array(z.string()).optional(),
			version: z.string().optional(),
		}),
});

const about = defineCollection({
	// Load Markdown files in the `src/content/about/` directory.
	loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({}),
});

export const collections = { posts, about };
