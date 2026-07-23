import { defineConfig } from "astro/config";

const base = process.env.PUBLIC_BASE_PATH || "/";
const site = process.env.PUBLIC_SITE_URL || "http://localhost:4321";

export default defineConfig({
  output: "static",
  site,
  base,
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
