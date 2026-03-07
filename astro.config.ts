import { defineConfig } from "astro/config";

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: "compile"
  }),

  integrations: [icon({ include: {}, iconDir: 'src/assets' }), sitemap()],
  site: 'https://pugma.tech',

  vite: {
    plugins: [tailwindcss()],
  },
});
