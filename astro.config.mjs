import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    sourcemap: false,
  },
  output: 'static',  // change from 'server' to 'static'
  outDir: 'dist/cloudflare', // optional if you want a custom output folder
});