import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { Reveal } from '@/components/shared/reveal';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });
  return buildMetadata({ locale, title: t('title'), description: t('subtitle'), path: '/contact' });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');
  const nav = await getTranslations('Nav');

  const info = [
    { icon: MapPin, label: t('addressLabel'), value: t('address') },
    { icon: Mail, label: t('emailLabel'), value: siteConfig.email, href: `mailto:${siteConfig.email}`, ltr: true },
    { icon: Phone, label: t('phoneLabel'), value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}`, ltr: true },
    { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.phone, href: siteConfig.whatsapp, ltr: true },
    { icon: Clock, label: t('hoursLabel'), value: t('hours') },
  ];

  return (
    <>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb={[{ label: nav('home'), href: '/' }, { label: nav('contact') }]}
      />

      <section className="bg-cloud py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div>
            <h2 className="h-display text-2xl text-ink">{t('infoTitle')}</h2>
            <div className="mt-8 space-y-4">
              {info.map((it) => (
                <Reveal key={it.label} className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-soft">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue/8">
                    <it.icon className="size-6 text-blue" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {it.label}
                    </p>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="mt-1 block font-semibold text-ink transition-colors hover:text-blue"
                        dir={it.ltr ? 'ltr' : undefined}
                        {...(it.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-ink">{it.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl border border-border/70 bg-institution grain">
              <div className="absolute inset-0 mesh-blue opacity-90" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-sand text-ink shadow-soft">
                  <MapPin className="size-6" />
                </span>
              </div>
              <span className="absolute bottom-4 text-sm font-semibold text-cloud/90 ltr:left-4 rtl:right-4">
                {t('address')}
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-border/70 bg-white p-7 shadow-soft sm:p-9">
            <h2 className="h-display text-2xl text-ink">{t('formTitle')}</h2>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
