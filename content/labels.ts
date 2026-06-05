import type { Localized, NewsCategory, ReportType } from './types';

/** Localized labels for news categories (kept in the content layer, CMS-ready). */
export const categoryLabels: Record<NewsCategory, Localized> = {
  activity: { ar: 'نشاط', fr: 'Activité', en: 'Activity' },
  program: { ar: 'برنامج', fr: 'Programme', en: 'Program' },
  training: { ar: 'تكوين', fr: 'Formation', en: 'Training' },
  visit: { ar: 'زيارة', fr: 'Visite', en: 'Visit' },
  event: { ar: 'فعالية', fr: 'Événement', en: 'Event' },
  partnership: { ar: 'شراكة', fr: 'Partenariat', en: 'Partnership' },
};

/** Localized labels for publication types. */
export const typeLabels: Record<ReportType, Localized> = {
  report: { ar: 'تقرير', fr: 'Rapport', en: 'Report' },
  study: { ar: 'دراسة', fr: 'Étude', en: 'Study' },
  guide: { ar: 'دليل', fr: 'Guide', en: 'Guide' },
  magazine: { ar: 'مجلة', fr: 'Magazine', en: 'Magazine' },
};

export const accentClasses = {
  blue: {
    text: 'text-blue',
    bg: 'bg-blue',
    soft: 'bg-blue/10',
    ring: 'ring-blue/20',
    border: 'border-blue/20',
  },
  green: {
    text: 'text-green-600',
    bg: 'bg-green',
    soft: 'bg-green/12',
    ring: 'ring-green/20',
    border: 'border-green/20',
  },
  sand: {
    text: 'text-sand-600',
    bg: 'bg-sand',
    soft: 'bg-sand/15',
    ring: 'ring-sand/25',
    border: 'border-sand/30',
  },
} as const;
