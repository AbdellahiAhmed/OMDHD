import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Target, TrendingUp, Network, GraduationCap, HandHeart, Megaphone, Search } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { VolunteerForm } from '@/components/sections/volunteer-form';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'VolunteerPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/volunteer' });
}

export default async function VolunteerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('VolunteerPage');
  const nav = await getTranslations('Nav');

  const benefits = [
    { icon: Target, text: t('benefit1') },
    { icon: TrendingUp, text: t('benefit2') },
    { icon: Network, text: t('benefit3') },
  ];
  const areas = [
    { icon: GraduationCap, text: t('area1') },
    { icon: HandHeart, text: t('area2') },
    { icon: Megaphone, text: t('area3') },
    { icon: Search, text: t('area4') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('volunteer') }]}
      />

      {/* Why */}
      <section className="bg-cloud py-24 lg:py-28">
        <Container>
          <h2 className="h-display text-2xl text-ink sm:text-3xl">{t('whyTitle')}</h2>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {benefits.map((b, i) => (
              <RevealItem key={i} className="h-full">
                <div className="group h-full rounded-3xl border border-border/70 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-green/12 transition-colors group-hover:bg-green">
                    <b.icon className="size-7 text-green-600 transition-colors group-hover:text-white" />
                  </span>
                  <p className="mt-6 text-lg font-semibold leading-relaxed text-ink">{b.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Areas + form */}
      <section className="bg-mist/40 py-24 lg:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="h-display text-2xl text-ink sm:text-3xl">{t('areasTitle')}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {areas.map((a, i) => (
                <Reveal key={i} delay={i * 0.06} className="flex items-center gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-soft">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue/8">
                    <a.icon className="size-6 text-blue" />
                  </span>
                  <span className="font-semibold text-ink">{a.text}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-white p-7 shadow-soft sm:p-9">
            <h2 className="h-display text-2xl text-ink">{t('formTitle')}</h2>
            <div className="mt-7">
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
