import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Sprout, Users, Megaphone, Quote } from 'lucide-react';
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
  const t = await getTranslations({ locale, namespace: 'MissionPage' });
  return buildMetadata({ locale, title: t('eyebrow'), description: t('statement'), path: '/mission' });
}

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('MissionPage');
  const nav = await getTranslations('Nav');

  const items = [
    { icon: ShieldCheck, text: t('m1') },
    { icon: Sprout, text: t('m2') },
    { icon: Users, text: t('m3') },
    { icon: Megaphone, text: t('m4') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        breadcrumb={[
          { label: nav('home'), href: '/' },
          { label: nav('identity') },
          { label: nav('mission') },
        ]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-border/70 bg-mist/40 p-8 text-center sm:p-12">
            <Quote className="mx-auto size-11 text-sand/60 rtl:scale-x-[-1]" aria-hidden="true" />
            <p className="h-display mt-5 text-balance text-2xl leading-snug text-ink sm:text-3xl">
              {t('statement')}
            </p>
          </Reveal>

          <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2" stagger={0.1}>
            {items.map((it, i) => (
              <RevealItem key={i} className="h-full">
                <div className="group flex h-full items-start gap-5 rounded-3xl border border-border/70 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-green/12 transition-colors group-hover:bg-green">
                    <it.icon className="size-7 text-green-600 transition-colors group-hover:text-white" />
                  </span>
                  <p className="pt-2 text-lg font-semibold leading-relaxed text-ink">{it.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
