import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    tags: z.string().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { articles };
