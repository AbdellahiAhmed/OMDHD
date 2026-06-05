import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Handshake, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { partners, partnerCategories } from '@/content/partners';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PartnersPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/partners' });
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('PartnersPage');
  const nav = await getTranslations('Nav');
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const catTitle = {
    international: t('categoriesInternational'),
    national: t('categoriesNational'),
    civil: t('categoriesCivil'),
  } as const;

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('partners') }]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container className="space-y-16">
          {partnerCategories.map((cat) => {
            const list = partners.filter((p) => p.category === cat);
            if (list.length === 0) return null;
            return (
              <div key={cat}>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="rule-gold" aria-hidden="true" />
                    <h2 className="text-xl font-bold text-blue">{catTitle[cat]}</h2>
                  </div>
                </Reveal>
                <RevealGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
                  {list.map((p) => (
                    <RevealItem key={p.name}>
                      <div className="group flex h-28 items-center gap-4 rounded-2xl border border-border/70 bg-white px-5 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift">
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue/8 text-lg font-extrabold text-blue transition-colors group-hover:bg-blue group-hover:text-cloud">
                          {p.monogram}
                        </span>
                        <span className="text-sm font-semibold leading-tight text-ink">
                          {p.name}
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Become a partner */}
      <section className="bg-mist/40 py-20">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-institution px-8 py-14 text-cloud sm:px-12 grain">
            <div className="absolute inset-0 mesh-blue opacity-90" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <Handshake className="size-7 text-sand" />
                </span>
                <h2 className="h-display mt-6 text-2xl text-cloud sm:text-3xl">
                  {t('becomePartnerTitle')}
                </h2>
                <p className="mt-4 text-cloud/75">{t('becomePartnerText')}</p>
              </div>
              <Button asChild variant="gold" size="lg">
                <Link href="/contact">
                  {nav('contact')}
                  <Arrow className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
