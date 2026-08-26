import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/articles' }),
	schema: rssSchema.extend({
		tags: z.array(z.string()).default([""]),
		draft: z.boolean().default(true),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
	}),
});

export const collections = { blog };
