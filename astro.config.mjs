import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Note : les redirections SEO des anciennes URL sont gérées par
// `public/_redirects` (vrais 301 côté serveur sur Cloudflare Pages).
// On NE les met PAS ici : Astro générerait des pages HTML « meta-refresh »
// qui auraient priorité sur le _redirects et casseraient les vrais 301.

// Paires FR ↔ EN explicites (les slugs diffèrent, donc l'auto-pairing
// d'@astrojs/sitemap ne fonctionne pas — on les fournit nous-mêmes).
const SITE = 'https://expresslivraison.ca';
const PAIRS = [
  ['/', '/en'],
  ['/services', '/en/services'],
  ['/entreprises', '/en/business'],
  ['/informations', '/en/info'],
  ['/nous-joindre', '/en/contact'],
];
const ALT_BY_URL = new Map();
for (const [fr, en] of PAIRS) {
  const frAbs = SITE + (fr === '/' ? '' : fr);
  const enAbs = SITE + en;
  const links = [
    { lang: 'fr-CA', url: frAbs },
    { lang: 'en-CA', url: enAbs },
    { lang: 'x-default', url: frAbs },
  ];
  // Indexer avec et sans barre oblique finale pour matcher quelles que soient
  // les variations de normalisation entre Astro et @astrojs/sitemap.
  ALT_BY_URL.set(frAbs, links);
  ALT_BY_URL.set(frAbs + '/', links);
  ALT_BY_URL.set(enAbs, links);
  ALT_BY_URL.set(enAbs + '/', links);
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Priorité et fréquence — signaux faibles, mais inoffensifs.
      changefreq: 'weekly',
      priority: 0.8,
      // Réécriture pour garantir un appariement hreflang complet entre FR et EN,
      // même quand les slugs diffèrent (/entreprises ↔ /en/business, etc.).
      serialize(item) {
        const links = ALT_BY_URL.get(item.url);
        if (links) item.links = links;
        if (item.url === SITE + '/' || item.url === SITE + '/en') {
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
