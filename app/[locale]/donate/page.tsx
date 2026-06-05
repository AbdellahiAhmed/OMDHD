import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Check, Info } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { DonateWidget } from '@/components/sections/donate-widget';
import { Reveal } from '@/components/shared/reveal';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DonatePage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/donate' });
}

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('DonatePage');
  const nav = await getTranslations('Nav');
  const why = [t('why1'), t('why2'), t('why3')];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('donate') }]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          {/* Why */}
          <div>
            <h2 className="h-display text-2xl text-ink sm:text-3xl">{t('whyTitle')}</h2>
            <ul className="mt-8 space-y-4">
              {why.map((w, i) => (
                <Reveal as="li" key={i} delay={i * 0.07} className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-soft">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green/12">
                    <Check className="size-4 text-green-600" />
                  </span>
                  <span className="pt-0.5 font-medium text-ink">{w}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-sand/30 bg-sand/8 p-5">
              <Info className="mt-0.5 size-5 shrink-0 text-sand-600" />
              <div>
                <p className="text-sm font-bold text-ink">{t('noteTitle')}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t('noteText')}</p>
              </div>
            </div>
          </div>

          {/* Widget */}
          <Reveal delay={0.1}>
            <DonateWidget />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
