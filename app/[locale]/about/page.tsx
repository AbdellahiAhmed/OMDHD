import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Scale, Sprout, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { SmartImage } from '@/components/shared/smart-image';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { buildMetadata } from '@/lib/seo';
import { IMG } from '@/content/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  const meta = await getTranslations({ locale, namespace: 'Meta' });
  return buildMetadata({
    locale,
    title: `${t('eyebrow')} · ${meta('shortName')}`,
    description: t('intro'),
    path: '/about',
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');
  const nav = await getTranslations('Nav');

  const pillars = [
    { icon: Scale, title: t('pillar1Title'), text: t('pillar1Text') },
    { icon: Sprout, title: t('pillar2Title'), text: t('pillar2Text') },
    { icon: HeartHandshake, title: t('pillar3Title'), text: t('pillar3Text') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('intro')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('about') }]}
      />

      {/* Story + approach */}
      <section className="bg-cloud py-24 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <SmartImage
              src={IMG.about}
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="aspect-[5/6] w-full rounded-[2.5rem]"
            />
          </Reveal>

          <div className="space-y-10">
            <div>
              <Reveal>
                <h2 className="h-display text-2xl text-blue sm:text-3xl">{t('storyTitle')}</h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {t('storyBody')}
                </p>
              </Reveal>
            </div>
            <div className="rounded-3xl border border-border/70 bg-mist/40 p-7">
              <Reveal>
                <h2 className="h-display text-2xl text-blue sm:text-3xl">{t('approachTitle')}</h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {t('approachBody')}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-mist/40 py-24 lg:py-28">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.12}>
            {pillars.map((p) => (
              <RevealItem key={p.title} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-border/70 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-blue/8 transition-colors group-hover:bg-blue">
                    <p.icon className="size-7 text-blue transition-colors group-hover:text-cloud" />
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
