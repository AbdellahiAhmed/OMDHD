import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/content/site';
import { interventionAreas } from '@/content/intervention-areas';
import { news } from '@/content/news';

const staticPaths = [
  '',
  '/about',
  '/vision',
  '/mission',
  '/values',
  '/intervention-areas',
  '/news',
  '/gallery',
  '/contact',
  '/donate',
  '/volunteer',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const dynamicPaths = [
    ...interventionAreas.map((a) => `/intervention-areas/${a.slug}`),
    ...news.map((n) => `/news/${n.slug}`),
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path.includes('/') && path.split('/').length > 2 ? 0.6 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${base}/${l}${path}`])
        ),
      },
    }))
  );
}
