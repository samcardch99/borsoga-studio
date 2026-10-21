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
    // Optional override for the "next project" preview image. The preview
    // fills the viewport width and is cropped by the fold, so it needs a
    // portrait/vertical photo; use this when images[0] is horizontal.
    nextPreviewImage: z.string().optional(),
    // <title> for the project page (Layout appends " — Borsoga Studio").
    // The RAL code stays visible on the page itself; falls back to `title`.
    seoTitle: z.string().optional(),
    // Alt text per image, aligned with `images` (same index). An empty
    // string marks a decorative image; a missing entry falls back to `title`.
    imageAlts: z.array(z.string()).optional(),
    // Keys of the related service landing pages (src/data/service-pages.ts),
    // e.g. ["kitchen-design-miami"]. Shown as "Related service" on the page.
    services: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
