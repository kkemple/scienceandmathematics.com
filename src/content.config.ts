import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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
			image: z.string().optional(),
			type: z
				.enum(["note", "paper", "experiment", "analysis", "review"])
				.default("note"),
		}),
});

const about = defineCollection({
	// Load Markdown files in the `src/content/about/` directory.
	loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({}),
});

export const collections = { posts, about };
