import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
  output: 'server',
  server: {
    host: true
  },
  build: {
    outDir: 'dist'
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
  adapter: node({
    mode: "standalone"
  }),
  css: {
    import: [
      "./css/style.css"
    ]
  },
  integrations: [react()]
});