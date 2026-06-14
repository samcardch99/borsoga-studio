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
    // When true, the project detail page uses the portrait-first template
    // ("project vertical pictures" frame): no hero image, and a gallery of
    // vertical images (single + narrative, a pair, single + closing line).
    // The `layout` enum is ignored for these projects.
    verticalLayout: z.boolean().optional().default(false),
    // When true, the full-width 4th image (pd2/pd3 layouts) is a portrait/
    // vertical photo, so it renders at ~half width and centered instead of
    // stretching full-bleed across the screen.
    fullImageVertical: z.boolean().optional().default(false),
    order: z.number(),
    images: z.array(z.string()),
  }),
});

export const collections = { projects };
