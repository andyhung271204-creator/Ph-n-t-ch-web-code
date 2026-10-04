import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // TODO: đổi thành tên miền thật khi có
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
