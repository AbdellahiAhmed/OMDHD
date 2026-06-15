import type { Metadata } from 'next';

/** Build per-page metadata with canonical + localized alternates + OG/Twitter. */
export function buildMetadata({
  locale,
  title,
  description,
  path,
  image = '/og-image.png',
}: {
  locale: string;
  title: string;
  description: string;
  path: string; // without locale prefix, e.g. "/about"
  image?: string;
}): Metadata {
  const clean = path === '/' ? '' : path;
  const url = `/${locale}${clean}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ar: `/ar${clean}`,
        fr: `/fr${clean}`,
        en: `/en${clean}`,
        'x-default': `/ar${clean}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
