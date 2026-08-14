import type { NewsArticle } from './types';
import { IMG } from './images';

/**
 * All drafted activities, including ones not yet confirmed as having taken
 * place. `news` below only publishes the ones the organization has actually
 * run — add a real slug to `publishedSlugs` once an activity is confirmed.
 */
const draftedNews: NewsArticle[] = [
  {
    slug: 'human-rights-training-nouakchott',
    category: 'training',
    date: '2026-05-18',
    readingTime: 4,
    cover: '/images/formation_image.jpeg',
    featured: true,
    area: 'awareness-training',
    title: {
      ar: 'دورة تدريبية حول حقوق الإنسان والمواطنة في نواكشوط',
      fr: 'Session de formation sur les droits de l’homme et la citoyenneté à Nouakchott',
      en: 'Training session on human rights and citizenship in Nouakchott',
    },
    excerpt: {
      ar: 'نظمت المنظمة دورة تدريبية مكثفة استهدفت عددًا من الشباب والفاعلين المدنيين حول مبادئ حقوق الإنسان والمواطنة الفاعلة.',
      fr: 'L’organisation a tenu une session de formation intensive destinée à des jeunes et acteurs civils autour des principes des droits de l’homme et de la citoyenneté active.',
      en: 'The organization held an intensive training session for youth and civil actors on the principles of human rights and active citizenship.',
    },
    location: { ar: 'نواكشوط', fr: 'Nouakchott', en: 'Nouakchott' },
    body: {
      ar: [
        'نظمت المنظمة الموريتانية لحقوق الإنسان والتنمية الإنسانية دورة تدريبية مكثفة على مدى يومين كاملين في العاصمة نواكشوط، استهدفت مجموعة من الشباب والناشطين في المجتمع المدني.',
        'تناولت الدورة محاور أساسية تشمل المبادئ الكونية لحقوق الإنسان، وآليات الحماية الوطنية والدولية، ودور المواطن الفاعل في ترسيخ دولة القانون.',
        'واختُتمت الدورة بتسليم شهادات للمشاركين، وبالتأكيد على أهمية مواصلة برامج التكوين باعتبارها استثمارًا في الإنسان وفي مستقبل الوطن.',
      ],
      fr: [
        'L’OMDHD a organisé une session de formation intensive de deux jours dans la capitale Nouakchott, destinée à un groupe de jeunes et d’acteurs de la société civile.',
        'La session a abordé des axes essentiels : les principes universels des droits de l’homme, les mécanismes de protection nationaux et internationaux, et le rôle du citoyen actif dans l’ancrage de l’État de droit.',
        'Elle s’est conclue par la remise de certificats aux participants et l’affirmation de l’importance de poursuivre les programmes de formation comme un investissement dans l’humain et l’avenir du pays.',
      ],
      en: [
        'OMDHD organized an intensive two-day training session in the capital, Nouakchott, for a group of young people and civil society actors.',
        'The session covered essential themes: the universal principles of human rights, national and international protection mechanisms, and the role of the active citizen in anchoring the rule of law.',
        'It concluded with the awarding of certificates to participants and an emphasis on the importance of continuing training programs as an investment in people and the country’s future.',
      ],
    },
  },
  {
    slug: 'women-empowerment-program-launch',
    category: 'program',
    date: '2025-04-09',
    readingTime: 5,
    cover: IMG.news[2],
    featured: true,
    area: 'women-empowerment',
    title: {
      ar: 'إطلاق برنامج لتمكين المرأة اقتصاديًا في الداخل',
      fr: 'Lancement d’un programme d’autonomisation économique des femmes à l’intérieur du pays',
      en: 'Launch of a women’s economic empowerment program in the interior',
    },
    excerpt: {
      ar: 'أطلقت المنظمة برنامجًا جديدًا يستهدف دعم المشاريع المدرّة للدخل لفائدة النساء في عدد من المناطق.',
      fr: 'L’organisation a lancé un nouveau programme de soutien aux projets générateurs de revenus en faveur des femmes dans plusieurs régions.',
      en: 'The organization launched a new program supporting income-generating projects for women in several regions.',
    },
    location: { ar: 'لعصابة', fr: 'Assaba', en: 'Assaba' },
    body: {
      ar: [
        'في إطار التزامها بتمكين المرأة، أطلقت المنظمة برنامجًا جديدًا يهدف إلى دعم المشاريع الصغيرة المدرّة للدخل لفائدة النساء في عدد من المناطق الداخلية.',
        'يشمل البرنامج دورات في إدارة المشاريع الصغيرة، ومرافقة تقنية، ودعمًا في الوصول إلى فرص التمويل، بما يعزز الاستقلالية الاقتصادية للمستفيدات.',
        'ويأتي هذا البرنامج ترجمةً لإيمان المنظمة بأن تمكين المرأة اقتصاديًا هو مدخل أساسي لتنمية مجتمعية شاملة ومستدامة.',
      ],
      fr: [
        'Dans le cadre de son engagement pour l’autonomisation des femmes, l’organisation a lancé un nouveau programme de soutien aux petits projets générateurs de revenus en faveur des femmes de plusieurs régions de l’intérieur.',
        'Le programme comprend des formations en gestion de petits projets, un accompagnement technique et un appui à l’accès au financement, renforçant l’indépendance économique des bénéficiaires.',
        'Ce programme traduit la conviction de l’organisation que l’autonomisation économique des femmes est une porte d’entrée essentielle vers un développement communautaire inclusif et durable.',
      ],
      en: [
        'As part of its commitment to women’s empowerment, the organization launched a new program supporting small income-generating projects for women in several interior regions.',
        'The program includes training in small-project management, technical accompaniment, and support in accessing financing opportunities, strengthening beneficiaries’ economic independence.',
        'This program reflects the organization’s belief that women’s economic empowerment is an essential gateway to inclusive, sustainable community development.',
      ],
    },
  },
  {
    slug: 'solidarity-campaign-vulnerable-families',
    category: 'activity',
    date: '2025-03-21',
    readingTime: 3,
    cover: IMG.news[4],
    area: 'humanitarian-action',
    title: {
      ar: 'حملة تضامنية لفائدة الأسر الهشة',
      fr: 'Campagne de solidarité au profit des familles vulnérables',
      en: 'Solidarity campaign for vulnerable families',
    },
    excerpt: {
      ar: 'نفذت المنظمة حملة تضامنية وزّعت خلالها مساعدات على عدد من الأسر الأكثر احتياجًا.',
      fr: 'L’organisation a mené une campagne de solidarité, distribuant des aides à plusieurs familles dans le besoin.',
      en: 'The organization carried out a solidarity campaign, distributing aid to a number of families in need.',
    },
    location: { ar: 'نواكشوط', fr: 'Nouakchott', en: 'Nouakchott' },
    body: {
      ar: [
        'نفذت المنظمة حملة تضامنية ميدانية استهدفت عددًا من الأسر الهشة، وذلك في إطار برامجها للعمل الإنساني والاجتماعي.',
        'وشملت الحملة توزيع مساعدات غذائية ومواد أساسية، إلى جانب الإنصات لحاجات الأسر وتوجيهها نحو برامج المرافقة المتاحة.',
        'وأكدت المنظمة أن هذه الحملات تجسّد قيم التكافل والتضامن التي تشكّل جوهر عملها الإنساني.',
      ],
      fr: [
        'L’organisation a mené une campagne de solidarité de terrain ciblant plusieurs familles vulnérables, dans le cadre de ses programmes d’action humanitaire et sociale.',
        'La campagne a comporté la distribution d’aides alimentaires et de produits de première nécessité, ainsi que l’écoute des besoins des familles et leur orientation vers les programmes d’accompagnement disponibles.',
        'L’organisation a souligné que ces campagnes incarnent les valeurs de solidarité au cœur de son action humanitaire.',
      ],
      en: [
        'The organization carried out a field solidarity campaign targeting a number of vulnerable families, as part of its humanitarian and social action programs.',
        'The campaign included the distribution of food aid and essential goods, as well as listening to families’ needs and guiding them toward available support programs.',
        'The organization emphasized that these campaigns embody the values of solidarity at the heart of its humanitarian work.',
      ],
    },
  },
  {
    slug: 'youth-leadership-forum',
    category: 'event',
    date: '2025-02-15',
    readingTime: 4,
    cover: IMG.news[3],
    area: 'youth-empowerment',
    title: {
      ar: 'منتدى الشباب حول القيادة والمبادرة',
      fr: 'Forum des jeunes sur le leadership et l’initiative',
      en: 'Youth forum on leadership and initiative',
    },
    excerpt: {
      ar: 'احتضنت المنظمة منتدى شبابيًا جمع نخبة من الشباب لمناقشة سبل تعزيز روح القيادة والمبادرة.',
      fr: 'L’organisation a accueilli un forum réunissant des jeunes pour discuter du renforcement du leadership et de l’initiative.',
      en: 'The organization hosted a youth forum bringing together young people to discuss strengthening leadership and initiative.',
    },
    location: { ar: 'نواذيبو', fr: 'Nouadhibou', en: 'Nouadhibou' },
    body: {
      ar: [
        'احتضنت المنظمة منتدى شبابيًا جمع نخبة من الشباب من مختلف المناطق، لمناقشة سبل تعزيز روح القيادة والمبادرة والابتكار.',
        'تخلل المنتدى جلسات حوارية وورش عمل تفاعلية تناولت ريادة الأعمال والمشاركة المدنية ودور الشباب في التنمية.',
        'وخرج المنتدى بجملة من التوصيات الرامية إلى توسيع برامج تمكين الشباب وفتح مزيد من فرص المشاركة أمامهم.',
      ],
      fr: [
        'L’organisation a accueilli un forum réunissant des jeunes de différentes régions pour discuter du renforcement du leadership, de l’initiative et de l’innovation.',
        'Le forum a comporté des sessions de dialogue et des ateliers interactifs sur l’entrepreneuriat, la participation civique et le rôle des jeunes dans le développement.',
        'Il a abouti à une série de recommandations visant à élargir les programmes d’autonomisation des jeunes et à leur ouvrir davantage d’opportunités de participation.',
      ],
      en: [
        'The organization hosted a youth forum bringing together young people from different regions to discuss strengthening leadership, initiative and innovation.',
        'The forum featured dialogue sessions and interactive workshops on entrepreneurship, civic participation and the role of youth in development.',
        'It produced a series of recommendations aimed at expanding youth empowerment programs and opening more opportunities for their participation.',
      ],
    },
  },
  {
    slug: 'partnership-signing-civil-society',
    category: 'partnership',
    date: '2025-01-28',
    readingTime: 3,
    cover: IMG.news[1],
    title: {
      ar: 'توقيع اتفاقية شراكة مع منظمات المجتمع المدني',
      fr: 'Signature d’un accord de partenariat avec des organisations de la société civile',
      en: 'Signing a partnership agreement with civil society organizations',
    },
    excerpt: {
      ar: 'وقّعت المنظمة اتفاقية شراكة جديدة لتعزيز التنسيق والعمل المشترك في مجالات الحقوق والتنمية.',
      fr: 'L’organisation a signé un nouvel accord de partenariat pour renforcer la coordination et l’action commune.',
      en: 'The organization signed a new partnership agreement to strengthen coordination and joint action.',
    },
    location: { ar: 'نواكشوط', fr: 'Nouakchott', en: 'Nouakchott' },
    body: {
      ar: [
        'وقّعت المنظمة اتفاقية شراكة جديدة مع عدد من منظمات المجتمع المدني، بهدف تعزيز التنسيق والعمل المشترك في مجالات حقوق الإنسان والتنمية البشرية.',
        'وتنص الاتفاقية على تبادل الخبرات وتنفيذ مبادرات مشتركة وتوحيد الجهود في المرافعة من أجل قضايا مشتركة.',
        'وأكد الطرفان أن هذه الشراكة تمثل خطوة مهمة نحو مجتمع مدني أكثر تكاملًا وفاعلية.',
      ],
      fr: [
        'L’organisation a signé un nouvel accord de partenariat avec plusieurs organisations de la société civile, afin de renforcer la coordination et l’action commune dans les domaines des droits de l’homme et du développement humain.',
        'L’accord prévoit l’échange d’expertises, la mise en œuvre d’initiatives conjointes et l’unification des efforts de plaidoyer autour de causes communes.',
        'Les deux parties ont souligné que ce partenariat représente une étape importante vers une société civile plus intégrée et efficace.',
      ],
      en: [
        'The organization signed a new partnership agreement with several civil society organizations to strengthen coordination and joint action in the fields of human rights and human development.',
        'The agreement provides for exchanging expertise, implementing joint initiatives, and unifying advocacy efforts around common causes.',
        'Both parties emphasized that this partnership represents an important step toward a more integrated and effective civil society.',
      ],
    },
  },
  {
    slug: 'field-visit-remote-regions',
    category: 'visit',
    date: '2024-12-12',
    readingTime: 4,
    cover: IMG.news[5],
    area: 'human-development',
    title: {
      ar: 'زيارة ميدانية لتقييم احتياجات المناطق النائية',
      fr: 'Visite de terrain pour évaluer les besoins des zones reculées',
      en: 'Field visit to assess the needs of remote areas',
    },
    excerpt: {
      ar: 'قام فريق المنظمة بزيارة ميدانية لعدد من المناطق النائية للوقوف على احتياجات السكان.',
      fr: 'Une équipe de l’organisation a effectué une visite de terrain dans des zones reculées pour évaluer les besoins des habitants.',
      en: 'An organization team conducted a field visit to remote areas to assess residents’ needs.',
    },
    location: { ar: 'الحوض الشرقي', fr: 'Hodh Ech Chargui', en: 'Hodh Ech Chargui' },
    body: {
      ar: [
        'قام فريق من المنظمة بزيارة ميدانية لعدد من المناطق النائية، بهدف الوقوف عن قرب على احتياجات السكان وأولوياتهم التنموية.',
        'وشملت الزيارة لقاءات مع السكان والفاعلين المحليين، وجمع معطيات ميدانية ستُعتمد في تصميم برامج تستجيب لخصوصية كل منطقة.',
        'وتعكس هذه الزيارة منهجية المنظمة القائمة على القرب والإنصات وبناء البرامج انطلاقًا من الحاجات الحقيقية.',
      ],
      fr: [
        'Une équipe de l’organisation a effectué une visite de terrain dans plusieurs zones reculées, afin d’évaluer de près les besoins des habitants et leurs priorités de développement.',
        'La visite a comporté des rencontres avec les habitants et les acteurs locaux, et la collecte de données de terrain qui serviront à concevoir des programmes adaptés à la spécificité de chaque région.',
        'Cette visite reflète la méthodologie de l’organisation fondée sur la proximité, l’écoute et la conception des programmes à partir des besoins réels.',
      ],
      en: [
        'An organization team conducted a field visit to several remote areas to closely assess residents’ needs and development priorities.',
        'The visit included meetings with residents and local actors and the collection of field data that will inform the design of programs tailored to each region’s specificity.',
        'This visit reflects the organization’s methodology based on proximity, listening, and building programs from real needs.',
      ],
    },
  },
];

/** Activities confirmed as actually having taken place. */
const publishedSlugs = ['human-rights-training-nouakchott'];

export const news: NewsArticle[] = draftedNews.filter((n) => publishedSlugs.includes(n.slug));

export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}

export const newsCategories = [
  'activity',
  'program',
  'training',
  'visit',
  'event',
  'partnership',
] as const;
