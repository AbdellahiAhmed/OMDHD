import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  ShieldCheck,
  BadgeCheck,
  Eye,
  Scale,
  Equal,
  HeartHandshake,
  Users,
} from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ValuesPage' });
  return buildMetadata({ locale, title: t('eyebrow'), description: t('subtitle'), path: '/values' });
}

export default async function ValuesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ValuesPage');
  const nav = await getTranslations('Nav');

  const values = [
    { icon: ShieldCheck, title: t('v1'), text: t('v1Text'), accent: 'blue' },
    { icon: BadgeCheck, title: t('v2'), text: t('v2Text'), accent: 'green' },
    { icon: Eye, title: t('v3'), text: t('v3Text'), accent: 'sand' },
    { icon: Scale, title: t('v4'), text: t('v4Text'), accent: 'blue' },
    { icon: Equal, title: t('v5'), text: t('v5Text'), accent: 'green' },
    { icon: HeartHandshake, title: t('v6'), text: t('v6Text'), accent: 'sand' },
    { icon: Users, title: t('v7'), text: t('v7Text'), accent: 'blue' },
  ] as const;

  const accentMap = {
    blue: 'bg-blue/8 text-blue group-hover:bg-blue group-hover:text-cloud',
    green: 'bg-green/12 text-green-600 group-hover:bg-green group-hover:text-white',
    sand: 'bg-sand/15 text-sand-600 group-hover:bg-sand group-hover:text-ink',
  };

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[
          { label: nav('home'), href: '/' },
          { label: nav('identity') },
          { label: nav('values') },
        ]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {values.map((v, i) => (
              <RevealItem key={i} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="pointer-events-none absolute -top-3 text-7xl font-black leading-none text-mist/60 ltr:right-2 rtl:left-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`relative flex size-14 items-center justify-center rounded-2xl transition-colors ${accentMap[v.accent]}`}>
                    <v.icon className="size-7" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
