import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Scale, Users, Sprout, Quote } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'VisionPage' });
  return buildMetadata({ locale, title: t('eyebrow'), description: t('statement'), path: '/vision' });
}

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('VisionPage');
  const nav = await getTranslations('Nav');

  const points = [
    { icon: Scale, title: t('p1Title'), text: t('p1Text') },
    { icon: Users, title: t('p2Title'), text: t('p2Text') },
    { icon: Sprout, title: t('p3Title'), text: t('p3Text') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        breadcrumb={[
          { label: nav('home'), href: '/' },
          { label: nav('identity') },
          { label: nav('vision') },
        ]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto size-12 text-sand/60 rtl:scale-x-[-1]" aria-hidden="true" />
            <p className="h-display mt-6 text-balance text-2xl leading-snug text-ink sm:text-3xl lg:text-[2.4rem] lg:leading-snug">
              {t('statement')}
            </p>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
            {points.map((p) => (
              <RevealItem key={p.title} className="h-full">
                <div className="group h-full rounded-3xl border border-border/70 bg-white p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sand/15 transition-colors group-hover:bg-sand">
                    <p.icon className="size-7 text-sand-600 transition-colors group-hover:text-ink" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
