import type { GalleryItem } from './types';
import { IMG } from './images';

const captions = [
  { ar: 'دورة تدريبية حول حقوق الإنسان', fr: 'Session de formation sur les droits', en: 'Human rights training session' },
  { ar: 'لقاء مع فاعلين محليين', fr: 'Rencontre avec des acteurs locaux', en: 'Meeting with local actors' },
  { ar: 'ورشة لتمكين المرأة', fr: 'Atelier d’autonomisation des femmes', en: 'Women empowerment workshop' },
  { ar: 'منتدى الشباب', fr: 'Forum des jeunes', en: 'Youth forum' },
  { ar: 'حملة تضامنية ميدانية', fr: 'Campagne de solidarité', en: 'Field solidarity campaign' },
  { ar: 'برنامج تنموي مجتمعي', fr: 'Programme de développement', en: 'Community development program' },
  { ar: 'توقيع اتفاقية شراكة', fr: 'Signature de partenariat', en: 'Partnership signing' },
  { ar: 'زيارة ميدانية', fr: 'Visite de terrain', en: 'Field visit' },
  { ar: 'فعالية توعوية', fr: 'Événement de sensibilisation', en: 'Awareness event' },
];

const spans: GalleryItem['span'][] = [
  'tall', 'square', 'wide', 'square', 'tall', 'square', 'wide', 'square', 'square',
];

export const gallery: GalleryItem[] = IMG.gallery.map((src, i) => ({
  src,
  caption: captions[i % captions.length],
  span: spans[i % spans.length],
}));
