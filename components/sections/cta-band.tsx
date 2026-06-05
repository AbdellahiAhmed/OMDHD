import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Heart, HandHeart } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';

export function CtaBand() {
  const t = useTranslations('CTA');
  const locale = useLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const cards = [
    {
      icon: Heart,
      title: t('donateTitle'),
      text: t('donateText'),
      cta: t('donateCta'),
      href: '/donate',
      tone: 'gold' as const,
    },
    {
      icon: HandHeart,
      title: t('volunteerTitle'),
      text: t('volunteerText'),
      cta: t('volunteerCta'),
      href: '/volunteer',
      tone: 'green' as const,
    },
  ];

  return (
    <section className="relative bg-cloud py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {cards.map((c) => (
            <RevealItem key={c.href}>
              <Link
                href={c.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-institution p-9 text-cloud shadow-lift transition-transform duration-500 hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 mesh-blue opacity-90 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-px seam-gold" aria-hidden="true" />
                <div className="relative">
                  <span
                    className={`flex size-16 items-center justify-center rounded-2xl ${
                      c.tone === 'gold' ? 'bg-sand text-ink' : 'bg-green text-white'
                    }`}
                  >
                    <c.icon className="size-8" />
                  </span>
                  <h3 className="mt-7 text-3xl font-extrabold text-cloud">{c.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-cloud/75">{c.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-base font-bold text-sand">
                    {c.cta}
                    <Arrow className="size-5 transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
