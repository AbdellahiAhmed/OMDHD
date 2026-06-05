import type { Partner } from './types';

/** Partner network. Replace monograms with real logos under /public/images/partners. */
export const partners: Partner[] = [
  { name: 'UNDP', category: 'international', monogram: 'UN' },
  { name: 'UNICEF', category: 'international', monogram: 'UC' },
  { name: 'European Union', category: 'international', monogram: 'EU' },
  { name: 'OHCHR', category: 'international', monogram: 'HR' },
  { name: 'UN Women', category: 'international', monogram: 'UW' },
  { name: 'Commission Nationale des Droits de l’Homme', category: 'national', monogram: 'CN' },
  { name: 'Ministère des Affaires Sociales', category: 'national', monogram: 'AS' },
  { name: 'Université de Nouakchott', category: 'national', monogram: 'UN' },
  { name: 'Croissant Rouge Mauritanien', category: 'national', monogram: 'CR' },
  { name: 'Réseau des ONG de Développement', category: 'civil', monogram: 'RO' },
  { name: 'Forum des Organisations Civiles', category: 'civil', monogram: 'FO' },
  { name: 'Coalition Droits & Dignité', category: 'civil', monogram: 'DD' },
];

export const partnerCategories = ['international', 'national', 'civil'] as const;
