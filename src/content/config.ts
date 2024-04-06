import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    tags: z.string().optional(),
    draft: z.boolean().default(true),
    heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
  }),
});

export const collections = { articles };
