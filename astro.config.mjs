// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://proyectorickapi.netlify.app/', // Cambia esto por tu dominio real
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  integrations: [sitemap()],
});