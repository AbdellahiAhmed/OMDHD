import type { Partner } from './types';

/**
 * Partner network.
 *
 * IMPORTANT (for reuse / resale): the international logos below are official,
 * legally protected emblems (UN agencies, EU, World Bank…). Displaying them
 * implies a genuine partnership or support relationship. For any live client,
 * show ONLY the organizations they actually partner with, and follow each
 * brand's usage guidelines / obtain permission.
 *
 * The national & civil-society entries are illustrative placeholders. Where a
 * real public emblem exists it is used (Mauritanian Red Crescent, national
 * emblem); the others fall back to a styled monogram until the client provides
 * their real partner logos (drop files in /public/images/partners and set `logo`).
 */
export const partners: Partner[] = [
  // International institutions — official logos
  {
    name: { ar: 'برنامج الأمم المتحدة الإنمائي', fr: 'PNUD', en: 'UNDP' },
    category: 'international', monogram: 'UNDP', logo: '/images/partners/undp.svg', url: 'https://www.undp.org',
  },
  {
    name: { ar: 'اليونيسف', fr: 'UNICEF', en: 'UNICEF' },
    category: 'international', monogram: 'UNICEF', logo: '/images/partners/unicef.svg', url: 'https://www.unicef.org',
  },
  {
    name: { ar: 'الاتحاد الأوروبي', fr: 'Union Européenne', en: 'European Union' },
    category: 'international', monogram: 'EU', logo: '/images/partners/eu.svg', url: 'https://european-union.europa.eu',
  },
  {
    name: { ar: 'مفوضية الأمم المتحدة لحقوق الإنسان', fr: 'Droits de l’Homme — ONU (HCDH)', en: 'UN Human Rights (OHCHR)' },
    category: 'international', monogram: 'OHCHR', logo: '/images/partners/ohchr.svg', url: 'https://www.ohchr.org',
  },
  {
    name: { ar: 'هيئة الأمم المتحدة للمرأة', fr: 'ONU Femmes', en: 'UN Women' },
    category: 'international', monogram: 'UN Women', logo: '/images/partners/unwomen.svg', url: 'https://www.unwomen.org',
  },
  {
    name: { ar: 'منظمة الصحة العالمية', fr: 'Organisation Mondiale de la Santé', en: 'World Health Organization' },
    category: 'international', monogram: 'WHO', logo: '/images/partners/who.svg', url: 'https://www.who.int',
  },
  {
    name: { ar: 'البنك الدولي', fr: 'Banque Mondiale', en: 'World Bank' },
    category: 'international', monogram: 'WB', logo: '/images/partners/worldbank.svg', url: 'https://www.worldbank.org',
  },

  // National partners
  {
    name: { ar: 'الهلال الأحمر الموريتاني', fr: 'Croissant Rouge Mauritanien', en: 'Mauritanian Red Crescent' },
    category: 'national', monogram: 'CRM', logo: '/images/partners/redcrescent.svg',
  },
  {
    name: { ar: 'وزارة الشؤون الاجتماعية', fr: 'Ministère des Affaires Sociales', en: 'Ministry of Social Affairs' },
    category: 'national', monogram: 'MAS', logo: '/images/partners/mauritania-emblem.svg',
  },
  {
    name: { ar: 'اللجنة الوطنية لحقوق الإنسان', fr: 'Commission Nationale des Droits de l’Homme', en: 'National Human Rights Commission' },
    category: 'national', monogram: 'CNDH',
  },
  {
    name: { ar: 'جامعة نواكشوط', fr: 'Université de Nouakchott', en: 'University of Nouakchott' },
    category: 'national', monogram: 'UNA',
  },

  // Civil society (illustrative placeholders — replace with the client's real partners)
  {
    name: { ar: 'شبكة المنظمات غير الحكومية للتنمية', fr: 'Réseau des ONG de Développement', en: 'Development NGO Network' },
    category: 'civil', monogram: 'RND',
  },
  {
    name: { ar: 'منتدى المنظمات المدنية', fr: 'Forum des Organisations Civiles', en: 'Civil Organizations Forum' },
    category: 'civil', monogram: 'FOC',
  },
];

export const partnerCategories = ['international', 'national', 'civil'] as const;
