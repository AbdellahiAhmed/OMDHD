import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Welcome } from '@/components/sections/welcome';
import { ImpactStats } from '@/components/sections/impact-stats';
import { AreasSection } from '@/components/sections/areas-section';
import { LatestNews } from '@/components/sections/latest-news';
import { VMV } from '@/components/sections/vmv';
import { Mauritania } from '@/components/sections/mauritania';
import { CtaBand } from '@/components/sections/cta-band';
import { Newsletter } from '@/components/sections/newsletter';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Welcome />
      <ImpactStats />
      <AreasSection />
      <LatestNews />
      <VMV />
      <Mauritania />
      <CtaBand />
      <Newsletter />
    </>
  );
}
