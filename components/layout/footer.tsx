import { useLocale, useTranslations } from 'next-intl';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { LogoMark } from './logo';
import { Container } from '@/components/shared/container';
import { DuneDivider } from '@/components/shared/dune-divider';
import { siteConfig } from '@/content/site';
import { pick } from '@/content/types';

const socials = [
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter / X' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = 2025;

  const colWork = [
    { key: 'areas', href: '/intervention-areas' },
    { key: 'news', href: '/news' },
    { key: 'reports', href: '/reports' },
    { key: 'gallery', href: '/gallery' },
  ];
  const colIdentity = [
    { key: 'about', href: '/about' },
    { key: 'vision', href: '/vision' },
    { key: 'mission', href: '/mission' },
    { key: 'values', href: '/values' },
  ];
  const colInvolve = [
    { key: 'donate', href: '/donate' },
    { key: 'volunteer', href: '/volunteer' },
    { key: 'partners', href: '/partners' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-900 pt-28 text-cloud/80">
      <DuneDivider position="top" fill="fill-cloud" flip />
      <div className="pointer-events-none absolute -top-20 size-[30rem] rounded-full bg-blue/30 blur-3xl ltr:right-0 rtl:left-0" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="size-12" />
              <span className="text-xl font-extrabold text-cloud">{t('Meta.shortName')}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cloud/65">
              {t('Footer.about')}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-white/8 text-cloud/80 transition-all hover:-translate-y-0.5 hover:bg-sand hover:text-ink"
                >
                  <s.icon className="size-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Identity */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cloud">
              {t('Nav.identity')}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {colIdentity.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="link-grow text-cloud/70 transition-colors hover:text-sand">
                    {t(`Nav.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cloud">
              {t('Footer.ourWork')}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {colWork.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="link-grow text-cloud/70 transition-colors hover:text-sand">
                    {t(`Nav.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved + contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cloud">
              {t('Footer.contact')}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cloud/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sand" />
                <span>{pick(siteConfig.address, locale)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-sand" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-sand" dir="ltr">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-sand" />
                <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-sand" dir="ltr">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {colInvolve.slice(0, 2).map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-cloud transition-colors hover:border-sand hover:text-sand"
                >
                  {t(`Nav.${l.key}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-cloud/55 sm:flex-row">
          <p>
            © {year} {t('Meta.shortName')}. {t('Footer.rights')}.
          </p>
          <p className="text-center">{t('Footer.madeWith')}</p>
        </div>
      </Container>
    </footer>
  );
}
