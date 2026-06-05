import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { NewsList } from '@/components/sections/news-list';
import { news } from '@/content/news';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NewsPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/news' });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('NewsPage');
  const nav = await getTranslations('Nav');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('news') }]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <NewsList articles={news} locale={locale} />
        </Container>
      </section>
    </>
  );
}
