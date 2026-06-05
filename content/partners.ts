import type { Partner } from './types';

/**
 * Partner network.
 *
 * IMPORTANT (for reuse / resale): these official emblems (UN agencies, EU,
 * World Bank, African Union, FIDH, the Mauritanian Red Crescent and national
 * emblem) are legally protected. Displaying them implies a genuine partnership.
 * For any live client, show ONLY the organizations they actually partner with,
 * follow each brand's usage guidelines, and obtain permission.
 *
 * To add a partner's logo: drop the file in /public/images/partners and set `logo`.
 */
export const partners: Partner[] = [
  // International institutions
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
  {
    name: { ar: 'اليونسكو', fr: 'UNESCO', en: 'UNESCO' },
    category: 'international', monogram: 'UNESCO', logo: '/images/partners/unesco.svg', url: 'https://www.unesco.org',
  },
  {
    name: { ar: 'منظمة الأغذية والزراعة (الفاو)', fr: 'FAO', en: 'FAO' },
    category: 'international', monogram: 'FAO', logo: '/images/partners/fao.svg', url: 'https://www.fao.org',
  },

  // National (Mauritanian) institutions
  {
    name: { ar: 'الهلال الأحمر الموريتاني', fr: 'Croissant Rouge Mauritanien', en: 'Mauritanian Red Crescent' },
    category: 'national', monogram: 'CRM', logo: '/images/partners/redcrescent.svg',
  },
  {
    name: { ar: 'وزارة الشؤون الاجتماعية', fr: 'Ministère des Affaires Sociales', en: 'Ministry of Social Affairs' },
    category: 'national', monogram: 'MAS', logo: '/images/partners/mauritania-emblem.svg',
  },
  {
    name: { ar: 'جامعة نواكشوط', fr: 'Université de Nouakchott', en: 'University of Nouakchott' },
    category: 'national', monogram: 'UNA', logo: '/images/partners/university.jpg',
  },
  {
    name: { ar: 'اللجنة الوطنية لحقوق الإنسان', fr: 'Commission Nationale des Droits de l’Homme', en: 'National Human Rights Commission' },
    category: 'national', monogram: 'CNDH', logo: '/images/partners/cndh.png',
  },

  // Civil society & regional partners
  {
    name: { ar: 'الفيدرالية الدولية لحقوق الإنسان', fr: 'FIDH', en: 'FIDH' },
    category: 'civil', monogram: 'FIDH', logo: '/images/partners/fidh.svg', url: 'https://www.fidh.org',
  },
  {
    name: { ar: 'الاتحاد الأفريقي', fr: 'Union Africaine', en: 'African Union' },
    category: 'civil', monogram: 'AU', logo: '/images/partners/africanunion.svg', url: 'https://au.int',
  },
];

export const partnerCategories = ['international', 'national', 'civil'] as const;
