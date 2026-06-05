import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Check, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { SmartImage } from '@/components/shared/smart-image';
import { AreaCard } from '@/components/shared/area-card';
import { Icon } from '@/components/shared/icon';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import { interventionAreas, getAreaBySlug } from '@/content/intervention-areas';
import { accentClasses } from '@/content/labels';
import { pick } from '@/content/types';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return interventionAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    locale,
    title: pick(area.title, locale),
    description: pick(area.summary, locale),
    path: `/intervention-areas/${slug}`,
    image: area.image,
  });
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const t = await getTranslations('AreasPage');
  const ta = await getTranslations('Areas');
  const nav = await getTranslations('Nav');
  const accent = accentClasses[area.accent];
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const related = interventionAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={nav('areas')}
        title={pick(area.title, locale)}
        subtitle={pick(area.summary, locale)}
        breadcrumb={[
          { label: nav('home'), href: '/' },
          { label: nav('areas'), href: '/intervention-areas' },
          { label: pick(area.title, locale) },
        ]}
      />

      {/* Overview */}
      <section className="bg-cloud py-24 lg:py-28">
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal className="relative order-last lg:order-first">
            <SmartImage
              src={area.image}
              alt={pick(area.title, locale)}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="aspect-[4/3] w-full rounded-[2.5rem]"
            />
          </Reveal>

          <div>
            <Reveal>
              <span className={`flex size-16 items-center justify-center rounded-2xl ring-1 ${accent.soft} ${accent.ring}`}>
                <Icon name={area.icon} className={`size-8 ${accent.text}`} />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-6 text-2xl text-ink sm:text-3xl">{t('overview')}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {pick(area.description, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mt-10 text-lg font-bold text-ink">{t('objectivesTitle')}</h3>
            </Reveal>
            <RevealGroup className="mt-5 space-y-3" stagger={0.08}>
              {pick(area.objectives, locale).map((obj, i) => (
                <RevealItem key={i} className="flex items-start gap-3">
                  <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${accent.soft}`}>
                    <Check className={`size-3.5 ${accent.text}`} />
                  </span>
                  <span className="font-medium text-ink">{obj}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-mist/40 py-20">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-institution px-8 py-12 text-center text-cloud sm:px-12 grain">
            <div className="absolute inset-0 mesh-blue opacity-90" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="h-display text-2xl text-cloud sm:text-3xl">{t('ctaTitle')}</h2>
              <p className="mt-4 text-cloud/75">{t('ctaText')}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild variant="gold" size="lg">
                  <Link href="/donate">
                    <Heart className="size-5" />
                    {nav('donate')}
                  </Link>
                </Button>
                <Button asChild variant="white" size="lg">
                  <Link href="/volunteer">{nav('volunteer')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="h-display text-2xl text-ink sm:text-3xl">{t('relatedTitle')}</h2>
            <Button asChild variant="ghost">
              <Link href="/intervention-areas">
                {nav('areas')}
                <Arrow className="size-4" />
              </Link>
            </Button>
          </div>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {related.map((a, i) => (
              <RevealItem key={a.slug} className="h-full">
                <AreaCard area={a} locale={locale} exploreLabel={ta('explore')} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
