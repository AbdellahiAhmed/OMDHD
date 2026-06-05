/**
 * Global site configuration — single source of truth for contact details,
 * social links and the canonical URL. CMS-ready: replace with a settings document.
 */
export const siteConfig = {
  url: 'https://omdhd.org',
  email: 'contact@omdhd.org',
  phone: '+222 45 00 00 00',
  phoneHref: '+22245000000',
  address: {
    ar: 'نواكشوط، الجمهورية الإسلامية الموريتانية',
    fr: 'Nouakchott, République Islamique de Mauritanie',
    en: 'Nouakchott, Islamic Republic of Mauritania',
  },
  social: {
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
  founded: 2015,
} as const;

/** Primary navigation model — labels resolved via next-intl `Nav` namespace. */
export const navLinks: { key: string; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'areas', href: '/intervention-areas' },
  { key: 'news', href: '/news' },
  { key: 'reports', href: '/reports' },
  { key: 'partners', href: '/partners' },
  { key: 'gallery', href: '/gallery' },
  { key: 'contact', href: '/contact' },
];

/** Identity sub-pages grouped under the institutional identity dropdown. */
export const identityLinks: { key: string; href: string }[] = [
  { key: 'about', href: '/about' },
  { key: 'vision', href: '/vision' },
  { key: 'mission', href: '/mission' },
  { key: 'values', href: '/values' },
];
