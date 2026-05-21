# Express Livraison — nouveau site

Site web refait pour [expresslivraison.ca](https://expresslivraison.ca).
Stack : **Astro 5** (sortie 100 % statique), HTML/CSS sans framework JS lourd.

## Démarrer

```bash
npm install
npm run dev
```

Le site sera disponible sur http://localhost:4321

## Construire pour la production

```bash
npm run build
npm run preview   # prévisualiser le build
```

Le résultat se trouve dans `dist/` — c'est ce qui doit être déployé.

## Configuration

Avant le premier déploiement, créez un fichier `.env` à la racine :

```
PUBLIC_WEB3FORMS_KEY=votre-cle-web3forms
```

Obtenez gratuitement votre clé sur **https://web3forms.com** (250 envois/mois gratuits).
Cette clé est utilisée par le formulaire de commande pour envoyer les commandes
par courriel à `info@expresslivraison.ca`.

> ⚠️ Sans clé valide, le formulaire de commande ne fonctionnera pas. Le numéro
> de téléphone et l'adresse courriel restent toujours fonctionnels.

## Structure

```
src/
  config/site.ts        ← Données centrales (téléphone, email, services, FAQ, tarifs)
  layouts/Layout.astro  ← Layout global, SEO, schema.org
  components/           ← Header, Footer, FloatingCTA, icônes
  pages/                ← Une page = un fichier .astro
    index.astro         ← Accueil
    services.astro      ← Services offerts
    tarifs.astro        ← Grille tarifaire complète
    entreprises.astro   ← Section B2B
    faq.astro           ← Questions fréquentes
    commander.astro     ← Formulaire de commande
    nous-joindre.astro  ← Coordonnées
  styles/global.css     ← Palette et styles communs

public/                 ← Fichiers statiques (logo, robots.txt, _redirects)
```

## Modifier le contenu

**Cas le plus courant** : changer un texte, un tarif, une FAQ, un numéro de téléphone.
👉 Tout est dans `src/config/site.ts`. Modifiez ce fichier et l'ensemble du site
est mis à jour.

## Déploiement

Le site génère 100 % de HTML statique — déployable n'importe où :

- **Netlify** (recommandé) : `connecter le repo` → build `npm run build`,
  publish `dist`. Les redirections SEO dans `public/_redirects` sont
  automatiquement appliquées.
- **Cloudflare Pages** : même chose. Variables d'environnement à ajouter
  dans l'interface (`PUBLIC_WEB3FORMS_KEY`).
- **Vercel** : framework auto-détecté.
- **OVH / hébergement traditionnel** : uploader le contenu de `dist/` par FTP
  dans le `www/`. Note : les redirections `_redirects` ne fonctionnent pas en
  Apache — utilisez un `.htaccess` à la place (voir ci-dessous).

### Pour Apache / cPanel (`.htaccess` dans `dist/`)

```apache
RewriteEngine On
Redirect 301 /livraison-depanneur-sherbrooke            /entreprises
Redirect 301 /livraison-sherbrooke-depanneur-sherbrooke /services
Redirect 301 /prix-livraison-sherbrooke                 /tarifs
Redirect 301 /express-livraison-sherbrooke              /nous-joindre
```

## SEO conservé

- Redirections 301 des anciennes URL vers les nouvelles (configurées dans
  `astro.config.mjs` ET dans `public/_redirects` pour Netlify/Cloudflare).
- Sitemap XML généré automatiquement (`/sitemap-index.xml`).
- Données structurées **LocalBusiness** + **FAQPage** (schema.org).
- Métadonnées Open Graph et Twitter Cards.
- Balises canoniques sur chaque page.
- HTML compressé en sortie.

## Performance

- Aucune dépendance JS au runtime (Astro envoie 0 KB de JS par défaut).
- Polices préchargées avec `font-display: swap`.
- CSS inliné automatiquement quand pertinent.
- Images servies avec largeurs/hauteurs explicites (CLS = 0).

## Migration depuis l'ancien site

Avant de pointer le domaine, comparer en parallèle :

1. Vérifier que toutes les anciennes pages redirigent vers la bonne nouvelle page.
2. Soumettre le nouveau sitemap dans Google Search Console.
3. Demander un re-crawl pour accélérer la prise en compte.
