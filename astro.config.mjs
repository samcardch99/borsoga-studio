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
      // Keep out of the index:
      //  · the experimental orbit view (it duplicates /projects and links to
      //    non-canonical, un-lowercased work URLs);
      //  · the funnel's four tool pages — the two configurators and the two
      //    briefs. They are tools, not entry pages, and they carry
      //    noindex,follow. The retired generator excluded them too.
      filter: (page) =>
        !page.includes('/projects-orbit') &&
        !/\/plans\/(es\/)?(configurator|configurador|av-configurator|configurador-av|web-brief|cuestionario-web|graphic-brief|cuestionario-grafico)\//.test(page),
    }),
  ],
});