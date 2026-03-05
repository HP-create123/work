import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		problem: z.string(),
		solution: z.string(),
		contributions: z.string(),
		technologies: z.array(z.string()),
		impact: z.string(),
		learned: z.string(),
		nextImprovements: z.string().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(999)
	})
});

export const collections = { projects };
