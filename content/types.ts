import type { Locale } from '@/i18n/routing';

/**
 * A field translated into every supported locale.
 * This shape mirrors what a localized CMS (e.g. Sanity with field-level i18n)
 * returns, so swapping these static files for live CMS fetchers later is trivial.
 */
export type Localized<T = string> = Record<Locale, T>;

/** Resolve a localized field for the active locale, with a safe fallback. */
export function pick<T>(field: Localized<T>, locale: string): T {
  return (field as Record<string, T>)[locale] ?? field.ar;
}

export type InterventionArea = {
  slug: string;
  /** lucide-react icon name */
  icon: string;
  /** brand color token used for accents */
  accent: 'blue' | 'green' | 'sand';
  title: Localized;
  summary: Localized;
  description: Localized;
  objectives: Localized<string[]>;
  image: string;
};

export type NewsCategory =
  | 'activity'
  | 'program'
  | 'training'
  | 'visit'
  | 'event'
  | 'partnership';

export type NewsArticle = {
  slug: string;
  category: NewsCategory;
  date: string; // ISO
  readingTime: number;
  cover: string;
  featured?: boolean;
  area?: string; // related intervention-area slug
  title: Localized;
  excerpt: Localized;
  location: Localized;
  body: Localized<string[]>; // paragraphs
};

export type ReportType = 'report' | 'study' | 'guide' | 'magazine';

export type Publication = {
  slug: string;
  type: ReportType;
  year: number;
  pages: number;
  cover: string;
  fileUrl: string;
  title: Localized;
  description: Localized;
};

export type PartnerCategory = 'national' | 'international' | 'civil';

export type Partner = {
  name: string;
  category: PartnerCategory;
  /** short monogram used when no logo is available */
  monogram: string;
  url?: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  labelKey: 'beneficiaries' | 'programs' | 'trainings' | 'regions';
};

export type GalleryItem = {
  src: string;
  caption: Localized;
  span: 'tall' | 'wide' | 'square';
};
