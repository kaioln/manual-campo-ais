import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://manual-ais.invalid",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  vite: {
    build: {
      sourcemap: false
    }
  }
});

