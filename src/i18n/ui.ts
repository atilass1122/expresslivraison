// Dictionnaire de traduction UI (chrome partagé) — FR par défaut, EN traduit.
// Le contenu des pages reste dans les fichiers .astro de chaque locale ;
// ce fichier ne contient que ce qui est utilisé dans Layout/Header/Footer/FloatingCTA
// et les chaînes JS injectées via define:vars (validation de formulaires, statut ouvert/fermé, etc.).

export const LANGUAGES = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = 'fr';

// Mapping des routes : même clé logique dans les deux langues, chemin différent.
export const ROUTES = {
  fr: {
    home: '/',
    services: '/services',
    business: '/entreprises',
    info: '/informations',
    contact: '/nous-joindre',
  },
  en: {
    home: '/en',
    services: '/en/services',
    business: '/en/business',
    info: '/en/info',
    contact: '/en/contact',
  },
} as const;

export const ui = {
  fr: {
    // Skip link / a11y
    skipToContent: 'Aller au contenu principal',
    mainNavAria: 'Principal',
    menuAria: 'Menu',
    quickActionsAria: 'Actions rapides',
    homeAria: 'Accueil',

    // Header / footer nav labels
    navHome: 'Accueil',
    navServices: 'Services',
    navBusiness: 'Entreprises',
    navInfo: 'Informations',
    navContact: 'Nous joindre',
    navOrder: 'Commander en ligne',

    // Language switcher
    switchToFr: 'Français',
    switchToEn: 'English',
    langSwitcherAria: 'Choisir la langue',

    // Logo tagline (split via <br/> avec /)
    logoTagline: 'Sherbrooke / 0–9 km',

    // Floating CTA
    ctaCall: 'Appeler',
    ctaOrder: 'Commander',

    // Footer
    footerTagline:
      'Livraison de dépanneur à domicile à Sherbrooke et ses environs. Tarif fixe, paiement à la porte, 7 jours sur 7.',
    footerNav: 'Naviguer',
    footerZonesTitle: 'Secteurs · 0–9 km',
    footerContactTitle: 'Contact',
    footerHoursWeek: 'Lun–Sam · 9 h–21 h',
    footerHoursSun: 'Dim · 10 h–17 h',
    footerFacebook: 'Facebook ↗',
    footerRights: 'Tous droits réservés',
    footerCredit: 'Création SR · Designer Web',
    footerPrivacyLink: 'Politique de confidentialité',

    // Statut ouvert / fermé (JS)
    statusOpenFmt: 'Ouvert · ferme à {h}',
    statusClosedFmt: 'Fermé · ouvre à {h}',

    // Validation formulaires (JS)
    formRequired: 'Champ requis',
    formPhoneInvalid: 'Numéro canadien à 10 chiffres requis',
    formFixErrors: 'Merci de corriger les champs en rouge.',
    formFillRequired: 'Merci de remplir les champs requis.',
    formSubmitting: 'Envoi en cours…',
    formOrderOk:
      "✓ Commande envoyée. Nous vous rappelons sous quelques minutes. Pour un suivi immédiat : <a href=\"tel:+18732007377\"><strong>873 200-7377</strong></a>.",
    formQuoteOk:
      "✓ Demande envoyée. Nous répondons dans les 24 h ouvrables.",
    formContactOk:
      "✓ Message envoyé. Réponse sous 24 h ouvrables.",
    formSubmitError:
      "Une erreur s'est produite. Réessayez ou appelez le <a href=\"tel:+18732007377\"><strong>873 200-7377</strong></a>.",
    formCaptchaRequired:
      'Veuillez compléter le captcha avant d\'envoyer le formulaire.',

    // Email — Commande
    emailOrderSubject: 'Nouvelle commande · Express Livraison',
    emailOrderTitle: 'NOUVELLE COMMANDE',
    emailLabelName: 'Nom',
    emailLabelPhone: 'Téléphone',
    emailLabelAddress: 'Adresse',
    emailLabelZone: 'Secteur',
    emailLabelOrderList: "LISTE D'ARTICLES",
    emailLabelAgeConsent: 'Consentement 18+',
    emailValYes: 'Oui',
    emailValNoneRequired: 'Non requis',
    emailLabelNotes: 'Notes',

    // Email — Soumission B2B
    emailQuoteSubject: 'Demande soumission B2B · Express Livraison',
    emailQuoteTitle: 'DEMANDE DE SOUMISSION B2B',
    emailLabelCompany: 'Entreprise',
    emailLabelContact: 'Contact',
    emailLabelEmail: 'Courriel',
    emailLabelNeed: 'Besoin',
    emailLabelVolume: 'Volume',
    emailLabelDetails: 'Détails',

    // Email — Contact
    emailContactSubjectPrefix: 'Message site web · ',
    emailContactSubjectDefault: 'Contact',
    emailContactTitle: 'MESSAGE · SITE WEB',
    emailLabelSubject: 'Sujet',
    emailLabelMessage: 'Message',

    // Site description par défaut (meta)
    siteDescription:
      "Service de livraison locale à Sherbrooke : restaurants, dépanneur, petits colis, articles essentiels, commandes rapides. Tarif 8 $ pour 2 km + 1 $/km. Rayon 0–9 km, 7 jours sur 7.",

    // SEO structured data
    htmlLang: 'fr-CA',
    ogLocale: 'fr_CA',
    ogLocaleAlternate: 'en_CA',
  },
  en: {
    skipToContent: 'Skip to main content',
    mainNavAria: 'Main',
    menuAria: 'Menu',
    quickActionsAria: 'Quick actions',
    homeAria: 'Home',

    navHome: 'Home',
    navServices: 'Services',
    navBusiness: 'Business',
    navInfo: 'Info',
    navContact: 'Contact',
    navOrder: 'Order online',

    switchToFr: 'Français',
    switchToEn: 'English',
    langSwitcherAria: 'Choose language',

    logoTagline: 'Sherbrooke / 0–9 km',

    ctaCall: 'Call',
    ctaOrder: 'Order',

    footerTagline:
      'Convenience store delivery in Sherbrooke and nearby areas. Flat fee, pay at the door, 7 days a week.',
    footerNav: 'Navigate',
    footerZonesTitle: 'Service area · 0–9 km',
    footerContactTitle: 'Contact',
    footerHoursWeek: 'Mon–Sat · 9 AM – 9 PM',
    footerHoursSun: 'Sun · 10 AM – 5 PM',
    footerFacebook: 'Facebook ↗',
    footerRights: 'All rights reserved',
    footerCredit: 'Created by SR · Web Designer',
    footerPrivacyLink: 'Privacy policy',

    statusOpenFmt: 'Open · closes at {h}',
    statusClosedFmt: 'Closed · opens at {h}',

    formRequired: 'Required field',
    formPhoneInvalid: '10-digit Canadian number required',
    formFixErrors: 'Please correct the fields highlighted in red.',
    formFillRequired: 'Please fill out the required fields.',
    formSubmitting: 'Sending…',
    formOrderOk:
      "✓ Order sent. We'll call you back within a few minutes. For immediate follow-up: <a href=\"tel:+18732007377\"><strong>873 200-7377</strong></a>.",
    formQuoteOk:
      "✓ Request sent. We reply within 24 business hours.",
    formContactOk:
      "✓ Message sent. Reply within 24 business hours.",
    formSubmitError:
      "Something went wrong. Please try again or call <a href=\"tel:+18732007377\"><strong>873 200-7377</strong></a>.",
    formCaptchaRequired:
      'Please complete the captcha before submitting the form.',

    emailOrderSubject: 'New order · Express Livraison',
    emailOrderTitle: 'NEW ORDER',
    emailLabelName: 'Name',
    emailLabelPhone: 'Phone',
    emailLabelAddress: 'Address',
    emailLabelZone: 'Area',
    emailLabelOrderList: 'ITEM LIST',
    emailLabelAgeConsent: '18+ consent',
    emailValYes: 'Yes',
    emailValNoneRequired: 'Not required',
    emailLabelNotes: 'Notes',

    emailQuoteSubject: 'B2B quote request · Express Livraison',
    emailQuoteTitle: 'B2B QUOTE REQUEST',
    emailLabelCompany: 'Company',
    emailLabelContact: 'Contact',
    emailLabelEmail: 'Email',
    emailLabelNeed: 'Need',
    emailLabelVolume: 'Volume',
    emailLabelDetails: 'Details',

    emailContactSubjectPrefix: 'Website message · ',
    emailContactSubjectDefault: 'Contact',
    emailContactTitle: 'MESSAGE · WEBSITE',
    emailLabelSubject: 'Subject',
    emailLabelMessage: 'Message',

    siteDescription:
      "Local delivery service in Sherbrooke: restaurants, convenience store items, small parcels, essentials, quick errands. Flat rate $8 for 2 km + $1/km. 0–9 km radius, 7 days a week.",

    htmlLang: 'en-CA',
    ogLocale: 'en_CA',
    ogLocaleAlternate: 'fr_CA',
  },
} as const;

export type UIKey = keyof typeof ui['fr'];
