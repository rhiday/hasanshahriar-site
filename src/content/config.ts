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

export const collection = { essays };
export const collections = { essays };
