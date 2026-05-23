import { ui, ROUTES, DEFAULT_LANG, type Lang } from './ui';

// Détecte la langue à partir de l'URL : tout chemin commençant par /en/ ou égal à /en → 'en'.
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'fr';
}

// Retourne la fonction de traduction t(key) pour une langue donnée.
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['fr']): string {
    return ui[lang][key] ?? ui[DEFAULT_LANG][key];
  };
}

// Convertit un chemin (relatif à la langue actuelle) en chemin localisé.
// Ex : localizedPath('services', 'en') → '/en/services'
export function localizedPath(routeKey: keyof (typeof ROUTES)['fr'], lang: Lang): string {
  return ROUTES[lang][routeKey];
}

// Retourne l'URL alternée d'une page donnée dans l'autre langue, basée sur la clé de route.
export function alternateUrl(routeKey: keyof (typeof ROUTES)['fr'], targetLang: Lang): string {
  return ROUTES[targetLang][routeKey];
}

// Lien vers l'ancre "commander" sur la page d'accueil de la langue active.
export function orderAnchor(lang: Lang): string {
  return lang === 'en' ? '/en#order' : '/#commander';
}
