import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { SmartImage } from '@/components/shared/smart-image';
import { Reveal } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import { IMG } from '@/content/images';

export function Welcome() {
  const t = useTranslations('Welcome');
  const locale = useLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const paragraphs = t('body').split('\n\n');

  return (
    <section className="relative bg-cloud py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative">
            <SmartImage
              src={IMG.welcome}
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="aspect-[5/6] w-full rounded-[2.5rem]"
            />
            {/* stat chip */}
            <div className="absolute -bottom-6 rounded-2xl bg-blue p-5 text-cloud shadow-lift ltr:-right-4 rtl:-left-4 sm:ltr:-right-8 sm:rtl:-left-8">
              <p className="text-3xl font-extrabold">2015</p>
              <p className="mt-1 text-xs text-cloud/70">
                {locale === 'ar' ? 'سنة التأسيس' : locale === 'fr' ? 'Année de fondation' : 'Founded'}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              {t('eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-4 text-balance text-3xl sm:text-4xl">{t('title')}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Quote className="mt-6 size-9 text-sand/60 rtl:scale-x-[-1]" aria-hidden="true" />
          </Reveal>

          <div className="mt-3 space-y-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <p className={i === 0 ? 'font-medium text-ink' : ''}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-4">
              <Button asChild variant="primary">
                <Link href="/about">
                  {t('cta')}
                  <Arrow className="size-4" />
                </Link>
              </Button>
              <span className="text-sm font-semibold text-ink/70">— {t('signature')}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
