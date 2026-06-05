import type { Publication } from './types';

/** Reports, studies and publications. CMS-ready — replace fileUrl with real PDFs. */
export const publications: Publication[] = [
  {
    slug: 'annual-report-2024',
    type: 'report',
    year: 2024,
    pages: 64,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'التقرير السنوي 2024',
      fr: 'Rapport annuel 2024',
      en: 'Annual Report 2024',
    },
    description: {
      ar: 'حصيلة شاملة لأنشطة المنظمة وبرامجها وأثرها خلال سنة 2024.',
      fr: 'Bilan complet des activités, programmes et impact de l’organisation en 2024.',
      en: 'A comprehensive review of the organization’s activities, programs and impact in 2024.',
    },
  },
  {
    slug: 'human-rights-situation-study',
    type: 'study',
    year: 2024,
    pages: 42,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'دراسة حول واقع حقوق الإنسان',
      fr: 'Étude sur la situation des droits de l’homme',
      en: 'Study on the human rights situation',
    },
    description: {
      ar: 'دراسة تحليلية ترصد أبرز التحديات والفرص في مجال حقوق الإنسان.',
      fr: 'Étude analytique recensant les principaux défis et opportunités en matière de droits.',
      en: 'An analytical study mapping the main challenges and opportunities in the rights field.',
    },
  },
  {
    slug: 'citizenship-guide',
    type: 'guide',
    year: 2023,
    pages: 28,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'دليل المواطنة الفاعلة',
      fr: 'Guide de la citoyenneté active',
      en: 'Active Citizenship Guide',
    },
    description: {
      ar: 'دليل عملي مبسّط يعرّف بالحقوق والواجبات ويشجع المشاركة المدنية.',
      fr: 'Guide pratique présentant les droits et devoirs et encourageant la participation civique.',
      en: 'A simplified practical guide to rights and duties that encourages civic participation.',
    },
  },
  {
    slug: 'women-empowerment-study',
    type: 'study',
    year: 2023,
    pages: 36,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'دراسة حول تمكين المرأة',
      fr: 'Étude sur l’autonomisation des femmes',
      en: 'Study on women’s empowerment',
    },
    description: {
      ar: 'قراءة في واقع تمكين المرأة وآفاق تعزيز مشاركتها في التنمية.',
      fr: 'Lecture de la réalité de l’autonomisation des femmes et des perspectives de participation.',
      en: 'An examination of women’s empowerment and prospects for their participation in development.',
    },
  },
  {
    slug: 'omdhd-magazine-01',
    type: 'magazine',
    year: 2024,
    pages: 20,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'مجلة المنظمة — العدد الأول',
      fr: 'Magazine de l’organisation — N°1',
      en: 'Organization Magazine — Issue 1',
    },
    description: {
      ar: 'نافذة دورية على أنشطة المنظمة وقصص نجاح المستفيدين.',
      fr: 'Une fenêtre périodique sur les activités et les histoires de réussite des bénéficiaires.',
      en: 'A periodic window onto the organization’s activities and beneficiaries’ success stories.',
    },
  },
  {
    slug: 'annual-report-2023',
    type: 'report',
    year: 2023,
    pages: 58,
    cover: '',
    fileUrl: '#',
    title: {
      ar: 'التقرير السنوي 2023',
      fr: 'Rapport annuel 2023',
      en: 'Annual Report 2023',
    },
    description: {
      ar: 'حصيلة أنشطة وبرامج المنظمة وأثرها خلال سنة 2023.',
      fr: 'Bilan des activités, programmes et impact de l’organisation en 2023.',
      en: 'A review of the organization’s activities, programs and impact in 2023.',
    },
  },
];
