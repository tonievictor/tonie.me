import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		keywords: z.string().optional(),
		tags: z.array(z.string()).default([""]),
		draft: z.boolean().default(true),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
	}),
});

export const collections = { articles };
