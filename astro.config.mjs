import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Note : les redirections SEO des anciennes URL sont gérées par
// `public/_redirects` (vrais 301 côté serveur sur Cloudflare Pages).
// On NE les met PAS ici : Astro générerait des pages HTML « meta-refresh »
// qui auraient priorité sur le _redirects et casseraient les vrais 301.

export default defineConfig({
  site: 'https://expresslivraison.ca',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
