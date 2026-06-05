import type { InterventionArea } from './types';
import { IMG } from './images';

/**
 * The six pillars of OMDHD's field work. Arabic copy is the canonical source
 * (provided by the organization); FR/EN are faithful institutional translations.
 */
export const interventionAreas: InterventionArea[] = [
  {
    slug: 'human-rights',
    icon: 'Scale',
    accent: 'blue',
    image: IMG.areas['human-rights'],
    title: {
      ar: 'حقوق الإنسان',
      fr: 'Droits de l’homme',
      en: 'Human Rights',
    },
    summary: {
      ar: 'حماية الحقوق والحريات الأساسية وترسيخ دولة القانون والمؤسسات.',
      fr: 'Protéger les droits et libertés fondamentaux et ancrer l’État de droit.',
      en: 'Protecting fundamental rights and freedoms and anchoring the rule of law.',
    },
    description: {
      ar: 'نعمل على حماية الحقوق والحريات الأساسية، وتعزيز الوعي القانوني والحقوقي، ومتابعة القضايا ذات الصلة بحقوق الإنسان، ودعم المبادرات الرامية إلى ترسيخ دولة القانون والمؤسسات.',
      fr: 'Nous œuvrons à la protection des droits et libertés fondamentaux, au renforcement de la conscience juridique et des droits, au suivi des questions liées aux droits de l’homme, et au soutien des initiatives visant à ancrer l’État de droit et les institutions.',
      en: 'We work to protect fundamental rights and freedoms, strengthen legal and rights awareness, follow up on human rights issues, and support initiatives aimed at anchoring the rule of law and institutions.',
    },
    objectives: {
      ar: [
        'رصد ومتابعة قضايا حقوق الإنسان',
        'نشر الثقافة القانونية والحقوقية',
        'دعم ضحايا انتهاكات الحقوق',
        'المرافعة من أجل إصلاحات تشريعية',
      ],
      fr: [
        'Suivi et documentation des questions de droits',
        'Diffusion de la culture juridique et des droits',
        'Soutien aux victimes de violations',
        'Plaidoyer pour des réformes législatives',
      ],
      en: [
        'Monitoring and documenting rights issues',
        'Spreading legal and rights culture',
        'Supporting victims of rights violations',
        'Advocating for legislative reforms',
      ],
    },
  },
  {
    slug: 'human-development',
    icon: 'Sprout',
    accent: 'green',
    image: IMG.areas['human-development'],
    title: {
      ar: 'التنمية البشرية',
      fr: 'Développement humain',
      en: 'Human Development',
    },
    summary: {
      ar: 'تطوير قدرات الأفراد والمجتمعات ودعم التعليم والتمكين الاقتصادي.',
      fr: 'Renforcer les capacités des individus et soutenir l’éducation et l’autonomisation.',
      en: 'Building the capacities of individuals and supporting education and empowerment.',
    },
    description: {
      ar: 'نساهم في تطوير قدرات الأفراد والمجتمعات من خلال برامج التدريب والتأهيل، ودعم التعليم، وتعزيز فرص التمكين الاقتصادي والاجتماعي للفئات المستهدفة.',
      fr: 'Nous contribuons au développement des capacités des individus et des communautés à travers des programmes de formation et de qualification, le soutien à l’éducation et le renforcement des opportunités d’autonomisation économique et sociale des populations cibles.',
      en: 'We contribute to developing the capacities of individuals and communities through training and qualification programs, supporting education, and strengthening economic and social empowerment opportunities for target groups.',
    },
    objectives: {
      ar: [
        'برامج التدريب والتأهيل المهني',
        'دعم التعليم ومحو الأمية',
        'تعزيز التمكين الاقتصادي',
        'مواكبة المبادرات المجتمعية',
      ],
      fr: [
        'Programmes de formation et de qualification',
        'Soutien à l’éducation et à l’alphabétisation',
        'Renforcement de l’autonomisation économique',
        'Accompagnement des initiatives communautaires',
      ],
      en: [
        'Vocational training and qualification programs',
        'Supporting education and literacy',
        'Strengthening economic empowerment',
        'Accompanying community initiatives',
      ],
    },
  },
  {
    slug: 'women-empowerment',
    icon: 'HeartHandshake',
    accent: 'sand',
    image: IMG.areas['women-empowerment'],
    title: {
      ar: 'تمكين المرأة',
      fr: 'Autonomisation des femmes',
      en: 'Women Empowerment',
    },
    summary: {
      ar: 'تعزيز دور المرأة في التنمية ودعم مشاركتها وتحقيق المساواة.',
      fr: 'Renforcer le rôle des femmes et soutenir leur participation et l’égalité.',
      en: 'Strengthening women’s role and supporting their participation and equality.',
    },
    description: {
      ar: 'نعمل على تعزيز دور المرأة في التنمية، ودعم مشاركتها الاقتصادية والاجتماعية والسياسية، وتشجيع المبادرات الرامية إلى تحقيق المساواة وتكافؤ الفرص.',
      fr: 'Nous œuvrons à renforcer le rôle des femmes dans le développement, à soutenir leur participation économique, sociale et politique, et à encourager les initiatives visant à réaliser l’égalité et l’égalité des chances.',
      en: 'We work to strengthen the role of women in development, support their economic, social and political participation, and encourage initiatives aimed at achieving equality and equal opportunity.',
    },
    objectives: {
      ar: [
        'دعم المشاركة الاقتصادية للمرأة',
        'تعزيز الحضور في الحياة العامة',
        'مكافحة التمييز والعنف',
        'بناء قدرات قيادية نسائية',
      ],
      fr: [
        'Soutien à la participation économique des femmes',
        'Renforcement de la présence dans la vie publique',
        'Lutte contre la discrimination et la violence',
        'Développement du leadership féminin',
      ],
      en: [
        'Supporting women’s economic participation',
        'Strengthening presence in public life',
        'Combating discrimination and violence',
        'Building women’s leadership capacities',
      ],
    },
  },
  {
    slug: 'youth-empowerment',
    icon: 'Rocket',
    accent: 'green',
    image: IMG.areas['youth-empowerment'],
    title: {
      ar: 'تمكين الشباب',
      fr: 'Autonomisation des jeunes',
      en: 'Youth Empowerment',
    },
    summary: {
      ar: 'تطوير مهارات الشباب وقدراتهم القيادية وروح المبادرة والابتكار.',
      fr: 'Développer les compétences des jeunes, leur leadership et l’esprit d’initiative.',
      en: 'Developing youth skills, leadership and the spirit of initiative.',
    },
    description: {
      ar: 'نؤمن بأن الشباب هم محرك التنمية، ولذلك نعمل على تطوير مهاراتهم وقدراتهم القيادية والمهنية، وتشجيع روح المبادرة والابتكار لديهم.',
      fr: 'Nous croyons que les jeunes sont le moteur du développement ; c’est pourquoi nous œuvrons à développer leurs compétences et leurs capacités de leadership et professionnelles, et à encourager leur esprit d’initiative et d’innovation.',
      en: 'We believe youth are the engine of development, which is why we work to develop their skills and their leadership and professional capacities, and to encourage their spirit of initiative and innovation.',
    },
    objectives: {
      ar: [
        'تنمية المهارات القيادية والمهنية',
        'تشجيع ريادة الأعمال والابتكار',
        'برامج التدريب والتشغيل',
        'إشراك الشباب في الشأن العام',
      ],
      fr: [
        'Développement des compétences de leadership',
        'Encouragement de l’entrepreneuriat et de l’innovation',
        'Programmes de formation et d’emploi',
        'Implication des jeunes dans la vie publique',
      ],
      en: [
        'Developing leadership and professional skills',
        'Encouraging entrepreneurship and innovation',
        'Training and employment programs',
        'Engaging youth in public affairs',
      ],
    },
  },
  {
    slug: 'humanitarian-action',
    icon: 'HandHeart',
    accent: 'sand',
    image: IMG.areas['humanitarian-action'],
    title: {
      ar: 'العمل الإنساني والاجتماعي',
      fr: 'Action humanitaire et sociale',
      en: 'Humanitarian & Social Action',
    },
    summary: {
      ar: 'مبادرات تضامنية وإغاثية للأسر الهشة وتعزيز التكافل الاجتماعي.',
      fr: 'Initiatives de solidarité et de secours pour les familles vulnérables.',
      en: 'Solidarity and relief initiatives for vulnerable families.',
    },
    description: {
      ar: 'ننفذ مبادرات تضامنية وإغاثية تستهدف الأسر الهشة والفئات المتضررة، ونسعى إلى تعزيز التكافل الاجتماعي وتحسين الظروف المعيشية للمستفيدين.',
      fr: 'Nous mettons en œuvre des initiatives de solidarité et de secours ciblant les familles vulnérables et les populations touchées, et cherchons à renforcer la solidarité sociale et à améliorer les conditions de vie des bénéficiaires.',
      en: 'We implement solidarity and relief initiatives targeting vulnerable families and affected groups, and seek to strengthen social solidarity and improve beneficiaries’ living conditions.',
    },
    objectives: {
      ar: [
        'حملات إغاثة وتضامن موسمية',
        'دعم الأسر الأكثر هشاشة',
        'تحسين الظروف المعيشية',
        'تعزيز ثقافة التكافل',
      ],
      fr: [
        'Campagnes de secours et de solidarité saisonnières',
        'Soutien aux familles les plus vulnérables',
        'Amélioration des conditions de vie',
        'Promotion de la culture de solidarité',
      ],
      en: [
        'Seasonal relief and solidarity campaigns',
        'Supporting the most vulnerable families',
        'Improving living conditions',
        'Promoting a culture of solidarity',
      ],
    },
  },
  {
    slug: 'awareness-training',
    icon: 'GraduationCap',
    accent: 'blue',
    image: IMG.areas['awareness-training'],
    title: {
      ar: 'التوعية والتكوين',
      fr: 'Sensibilisation et formation',
      en: 'Awareness & Training',
    },
    summary: {
      ar: 'دورات وورش وندوات لنشر المعرفة والوعي بالحقوق والتنمية والمواطنة.',
      fr: 'Sessions, ateliers et séminaires pour diffuser le savoir et la conscience.',
      en: 'Sessions, workshops and seminars to spread knowledge and awareness.',
    },
    description: {
      ar: 'ننظم دورات تدريبية وورش عمل وندوات تهدف إلى نشر المعرفة وتعزيز الوعي في مجالات حقوق الإنسان والتنمية والمواطنة.',
      fr: 'Nous organisons des sessions de formation, des ateliers et des séminaires visant à diffuser le savoir et à renforcer la conscience dans les domaines des droits de l’homme, du développement et de la citoyenneté.',
      en: 'We organize training sessions, workshops and seminars aimed at spreading knowledge and strengthening awareness in the fields of human rights, development and citizenship.',
    },
    objectives: {
      ar: [
        'دورات في حقوق الإنسان والمواطنة',
        'ورش عمل لبناء القدرات',
        'ندوات ولقاءات توعوية',
        'إنتاج محتوى تثقيفي',
      ],
      fr: [
        'Sessions sur les droits et la citoyenneté',
        'Ateliers de renforcement des capacités',
        'Séminaires et rencontres de sensibilisation',
        'Production de contenu éducatif',
      ],
      en: [
        'Sessions on rights and citizenship',
        'Capacity-building workshops',
        'Awareness seminars and meetings',
        'Producing educational content',
      ],
    },
  },
];

export function getAreaBySlug(slug: string) {
  return interventionAreas.find((a) => a.slug === slug);
}
