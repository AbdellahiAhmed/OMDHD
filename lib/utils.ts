import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with Western (Latin) digits everywhere — including Arabic.
 * The client prefers French/Western numerals (0-9) over Arabic-Indic (٠-٩).
 */
export function formatNumber(value: number, locale: string) {
  const intlLocale = locale === 'fr' ? 'fr-FR' : 'en-US';
  return new Intl.NumberFormat(intlLocale).format(value);
}

/**
 * Format an ISO date string. Arabic keeps its native month names but uses
 * Western digits (via the `-nu-latn` numbering extension), per client preference.
 */
export function formatDate(iso: string, locale: string) {
  const intlLocale =
    locale === 'ar' ? 'ar-MR-u-nu-latn' : locale === 'fr' ? 'fr-FR' : 'en-US';
  return new Intl.DateTimeFormat(intlLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}
