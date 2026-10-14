import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: cloudflare(),
  site: 'https://xaydunggiakhanh.vn',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
