import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { PartnerLogo } from '@/components/shared/partner-logo';
import { partners } from '@/content/partners';
import { pick } from '@/content/types';
import { useLocale } from 'next-intl';

export function PartnersSection() {
  const t = useTranslations('Partners');
  const locale = useLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-mist/40 py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.05}
        >
          {partners.map((p) => (
            <RevealItem key={p.name.en}>
              <div
                className="group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-white px-4 text-center shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift"
                title={pick(p.name, locale)}
              >
                <div className="flex h-12 items-center justify-center">
                  <PartnerLogo partner={p} locale={locale} />
                </div>
                <span className="line-clamp-2 text-[0.7rem] font-medium text-muted-foreground">
                  {pick(p.name, locale)}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Button asChild variant="ghost">
            <Link href="/partners">
              {t('cta')}
              <Arrow className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
