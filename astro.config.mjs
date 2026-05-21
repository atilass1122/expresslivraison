import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Redirections pour préserver le SEO de l'ancien site
// (anciennes URL non standard → nouvelles URL canoniques)
const legacyRedirects = {
  '/livraison-depanneur-sherbrooke': '/entreprises',
  '/livraison-sherbrooke-depanneur-sherbrooke': '/services',
  '/prix-livraison-sherbrooke': '/informations#paiement',
  '/express-livraison-sherbrooke': '/nous-joindre',
};

// Anciennes routes internes (design remplacé) → nouvelles pages équivalentes
const orphanRedirects = {
  '/tarifs': '/informations#paiement',
  '/faq': '/informations',
  '/commander': '/#commander',
};

export default defineConfig({
  site: 'https://expresslivraison.ca',
  trailingSlash: 'never',
  integrations: [sitemap()],
  redirects: { ...legacyRedirects, ...orphanRedirects },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
