import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hasanshahriar.com',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-light' } },
});
