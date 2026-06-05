import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { ReportsList } from '@/components/sections/reports-list';
import { publications } from '@/content/reports';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ReportsPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/reports' });
}

export default async function ReportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ReportsPage');
  const nav = await getTranslations('Nav');

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('reports') }]}
      />
      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <ReportsList publications={publications} locale={locale} />
        </Container>
      </section>
    </>
  );
}
