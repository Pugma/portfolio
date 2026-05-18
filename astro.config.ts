import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
  }),

  image: {
    domains: ["trap.jp", "paiza.hatenablog.com", "cdn.image.st-hatena.com"],
  },

  integrations: [icon({ include: {}, iconDir: "src/assets" }), sitemap()],
  site: "https://pugma.tech",

  vite: {
    plugins: [tailwindcss()],
  },
});
