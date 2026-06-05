import type { Partner } from './types';

/**
 * Partner network.
 *
 * IMPORTANT (for reuse / resale): the international logos below are official,
 * legally protected emblems (UN agencies, EU, World Bank…). Displaying them
 * implies a genuine partnership or support relationship. For any live client,
 * show ONLY the organizations they actually partner with, and follow each
 * brand's usage guidelines / obtain permission. The national & civil-society
 * entries are illustrative placeholders — replace with the client's real local
 * partners and their own logos (drop files in /public/images/partners).
 */
export const partners: Partner[] = [
  // International institutions (official logos in /public/images/partners)
  { name: 'UNDP', category: 'international', monogram: 'UNDP', logo: '/images/partners/undp.svg', url: 'https://www.undp.org' },
  { name: 'UNICEF', category: 'international', monogram: 'UNICEF', logo: '/images/partners/unicef.svg', url: 'https://www.unicef.org' },
  { name: 'European Union', category: 'international', monogram: 'EU', logo: '/images/partners/eu.svg', url: 'https://european-union.europa.eu' },
  { name: 'UN Human Rights (OHCHR)', category: 'international', monogram: 'OHCHR', logo: '/images/partners/ohchr.svg', url: 'https://www.ohchr.org' },
  { name: 'UN Women', category: 'international', monogram: 'UN Women', logo: '/images/partners/unwomen.svg', url: 'https://www.unwomen.org' },
  { name: 'World Health Organization', category: 'international', monogram: 'WHO', logo: '/images/partners/who.svg', url: 'https://www.who.int' },
  { name: 'World Bank', category: 'international', monogram: 'WB', logo: '/images/partners/worldbank.svg', url: 'https://www.worldbank.org' },

  // National partners (illustrative — replace with the client's real partners + logos)
  { name: 'Commission Nationale des Droits de l’Homme', category: 'national', monogram: 'CNDH' },
  { name: 'Ministère des Affaires Sociales', category: 'national', monogram: 'MAS' },
  { name: 'Université de Nouakchott', category: 'national', monogram: 'UNA' },
  { name: 'Croissant Rouge Mauritanien', category: 'national', monogram: 'CRM' },

  // Civil society (illustrative)
  { name: 'Réseau des ONG de Développement', category: 'civil', monogram: 'RND' },
  { name: 'Forum des Organisations Civiles', category: 'civil', monogram: 'FOC' },
];

export const partnerCategories = ['international', 'national', 'civil'] as const;
