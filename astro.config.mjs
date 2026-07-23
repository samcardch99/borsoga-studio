// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical production origin — required for absolute canonical URLs, Open
  // Graph tags and the generated sitemap. Update if the domain changes.
  site: 'https://borsogastudio.com',

  // Programmatic prefetch (astro:prefetch) — the project pages warm the
  // next-project HTML ahead of the scroll-driven transition.
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["gsap/SplitText", "gsap/ScrollTrigger", "gsap/ScrollToPlugin"],
    },
  },

  integrations: [
    react(),
    sitemap({
      // Keep the experimental orbit view out of the index (it duplicates
      // /projects and links to non-canonical, un-lowercased work URLs).
      filter: (page) => !page.includes('/projects-orbit'),
    }),
  ],
});