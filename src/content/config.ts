import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(['outsiders-edge', 'sent-not-saved', 'ai-era']),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    disciplines: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    accent: z.enum(['blue', 'lime', 'clay', 'violet']),
  }),
});

export const collections = { essays, cases };
