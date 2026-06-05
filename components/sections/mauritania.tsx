import { useTranslations } from 'next-intl';
import { Check, MapPin } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Container } from '@/components/shared/container';
import { SmartImage } from '@/components/shared/smart-image';
import { Reveal } from '@/components/shared/reveal';
import { IMG } from '@/content/images';

export function Mauritania() {
  const t = useTranslations('Mauritania');
  const locale = useLocale();
  const points = [t('point1'), t('point2'), t('point3')];

  return (
    <section className="relative bg-cloud py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
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
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t('body')}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal as="li" key={i} delay={0.14 + i * 0.07} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-green/12">
                  <Check className="size-4 text-green-600" />
                </span>
                <span className="font-medium text-ink">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Visual with map-pin motif */}
        <Reveal delay={0.1} className="relative">
          <SmartImage
            src={IMG.mauritania}
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="aspect-[5/4] w-full rounded-[2.5rem]"
          />
          <div className="absolute bottom-5 flex items-center gap-2 rounded-full bg-blue-900/70 px-4 py-2 text-sm font-semibold text-cloud backdrop-blur-md ltr:left-5 rtl:right-5">
            <MapPin className="size-4 text-sand" />
            {locale === 'ar' ? 'موريتانيا' : locale === 'fr' ? 'Mauritanie' : 'Mauritania'}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
