'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { DuneDivider } from '@/components/shared/dune-divider';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;
const HERO_IMG = '/hero_background_image.jpeg';

export function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  const trust =
    locale === 'ar'
      ? 'منظمة مستقلة وشفافة · منذ 2015'
      : locale === 'fr'
        ? 'Indépendante et transparente · depuis 2015'
        : 'Independent and transparent · since 2015';

  const heroAlt =
    locale === 'ar'
      ? 'أطفال موريتانيون يبتسمون بأمل'
      : locale === 'fr'
        ? 'Des enfants mauritaniens souriants, pleins d’espoir'
        : 'Smiling Mauritanian children, full of hope';

  // The blue wash is dense behind the text (start side) and clears over the
  // photo (end side). Direction flips with reading order.
  const washDir = isRtl ? 'to left' : 'to right';
  const objectPosition = isRtl ? '28% 28%' : '72% 28%';

  return (
    <section className="relative isolate overflow-hidden bg-blue-900 pb-32 pt-32 text-cloud sm:pt-36 lg:min-h-[40rem] lg:pb-40 lg:pt-44">
      {/* Full-bleed photograph, blended into the institutional blue */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={HERO_IMG}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* DESKTOP: a light directional wash — dense only behind the copy, then
            clears quickly so the photograph reads naturally (much less blue) */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `linear-gradient(${washDir}, rgba(4,39,77,0.82) 0%, rgba(4,39,77,0.5) 24%, rgba(5,49,97,0.2) 48%, rgba(6,59,115,0.04) 70%, rgba(6,59,115,0) 88%)`,
          }}
        />
        {/* MOBILE: a vertical wash — readable behind the stacked copy near the top,
            clearing toward the photo below (no flat blue blanket) */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(4,39,77,0.7) 0%, rgba(4,39,77,0.46) 40%, rgba(4,39,77,0.2) 68%, rgba(5,49,97,0.38) 90%, #053161 100%)',
          }}
        />
        {/* deep blue only at the very bottom to meet the dune divider */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(4,39,77,0.12) 0%, transparent 16%, transparent 74%, #053161 100%)',
          }}
        />
      </div>

      {/* fine gold seam at the very top */}
      <div
        className="absolute inset-x-0 top-0 -z-[5] h-px bg-gradient-to-r from-transparent via-sand/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative grid items-center lg:grid-cols-2">
        <div className="max-w-2xl">
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-sand" />
            <span
              className={cn(
                'text-sm font-semibold text-sand',
                !isRtl && 'uppercase tracking-[0.16em]'
              )}
            >
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="h-display mt-7 whitespace-pre-line text-balance text-[2.8rem] leading-[1.04] text-cloud [text-shadow:0_2px_18px_rgba(2,12,30,0.45)] sm:text-6xl lg:text-[4.5rem]"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cloud/90 [text-shadow:0_1px_12px_rgba(2,12,30,0.55)] lg:text-xl"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild variant="gold" size="lg">
              <Link href="/about">
                {t('ctaPrimary')}
                <Arrow className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="white" size="lg">
              <Link href="/donate">
                <Heart className="size-5" />
                {t('ctaSecondary')}
              </Link>
            </Button>
          </motion.div>

          <motion.p
            {...fade(0.34)}
            className="mt-10 inline-flex items-center gap-2.5 text-sm font-medium text-cloud/75"
          >
            <ShieldCheck className="size-4 shrink-0 text-sand" />
            {trust}
          </motion.p>
        </div>

        {/* end column intentionally empty — the photograph fills it */}
        <div aria-hidden="true" className="hidden lg:block" />
      </div>

      <DuneDivider fill="fill-cloud" />
    </section>
  );
}
