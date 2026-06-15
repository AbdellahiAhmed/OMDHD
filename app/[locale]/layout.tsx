import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, localeDirection, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/content/site';
import { inter, tajawal } from '@/lib/fonts';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  const title = t('siteName');
  const description = t('description');

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${t('shortName')} — ${t('tagline')}`,
      template: `%s · ${t('shortName')}`,
    },
    description,
    applicationName: t('shortName'),
    keywords: [
      'OMDHD',
      'Mauritania',
      'human rights',
      'human development',
      'حقوق الإنسان',
      'التنمية البشرية',
      'موريتانيا',
      'ONG Mauritanie',
    ],
    authors: [{ name: t('siteName') }],
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: '/ar', fr: '/fr', en: '/en', 'x-default': '/ar' },
    },
    openGraph: {
      type: 'website',
      siteName: t('shortName'),
      title,
      description,
      locale: locale === 'ar' ? 'ar_MR' : locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `/${locale}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    icons: {
      icon: [{ url: '/favicon.png', type: 'image/png' }],
      apple: '/apple-touch-icon.png',
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#063B73',
  colorScheme: 'light',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Common' });
  const meta = await getTranslations({ locale, namespace: 'Meta' });
  const messages = await getMessages();
  const dir = localeDirection[locale as Locale];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: meta('siteName'),
    alternateName: 'OMDHD',
    description: meta('description'),
    url: `${siteConfig.url}/${locale}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: String(siteConfig.founded),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nouakchott',
      addressCountry: 'MR',
    },
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${tajawal.variable}`}>
      <body className="min-h-dvh bg-cloud font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cloud"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
