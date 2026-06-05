import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { AreaCard } from '@/components/shared/area-card';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { interventionAreas } from '@/content/intervention-areas';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AreasPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/intervention-areas' });
}

export default async function AreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AreasPage');
  const ta = await getTranslations('Areas');
  const nav = await getTranslations('Nav');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('areas') }]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {interventionAreas.map((area, i) => (
              <RevealItem key={area.slug} className="h-full">
                <AreaCard area={area} locale={locale} exploreLabel={ta('explore')} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
