import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { GalleryGrid } from '@/components/sections/gallery-grid';
import { gallery } from '@/content/gallery';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'GalleryPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/gallery' });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('GalleryPage');
  const nav = await getTranslations('Nav');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('gallery') }]}
      />
      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <GalleryGrid items={gallery} locale={locale} />
        </Container>
      </section>
    </>
  );
}
