import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    discipline: z.string(),
    scope: z.string(),
    client: z.string().optional(),
    description: z.string(),
    closingLine: z.string(),
    year: z.string(),
    layout: z.enum(['pd1', 'pd2', 'pd3']),
    order: z.number(),
    images: z.array(z.string()),
  }),
});

export const collections = { projects };
