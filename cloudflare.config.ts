import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "portfolio",
    compatibilityDate: "2026-04-24",
    compatibilityFlags: ["nodejs_compat"],
    observability: {
      enabled: true,
    },
  },
});
