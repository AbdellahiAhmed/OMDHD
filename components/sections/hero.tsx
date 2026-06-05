'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { DuneDivider } from '@/components/shared/dune-divider';
import { heroSrc } from '@/content/images';
import { heroStats } from '@/content/stats';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section className="relative isolate overflow-hidden bg-blue-900 pb-32 pt-32 text-cloud sm:pt-36 lg:pb-40 lg:pt-44">
      {/* Restrained institutional background: deep blue with one soft directional
          light and a fine gold seam — no gradient-blob clutter. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, #04274d 0%, #063B73 60%, #053161 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-sand/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <span className="h-px w-10 bg-sand" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-sand">
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="h-display mt-7 whitespace-pre-line text-balance text-[2.7rem] leading-[1.06] text-cloud sm:text-5xl lg:text-[4rem]"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-cloud/75"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap gap-4">
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

          {/* stats strip */}
          <motion.dl
            {...fade(0.34)}
            className="mt-12 grid max-w-md grid-cols-3 gap-x-8 border-t border-white/12 pt-7"
          >
            {heroStats.map((s) => (
              <div key={s.key}>
                <dt className="text-3xl font-extrabold tabular-nums text-cloud">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1.5 text-xs leading-tight text-cloud/60">{t(s.key)}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual — confident editorial frame, no decorative clutter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-blue-800 ring-1 ring-white/10">
            <Image
              src={heroSrc()}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"
              aria-hidden="true"
            />
            {/* integrated credibility strip — bottom of the image, not a floating sticker */}
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-blue-900/70 px-4 py-3 backdrop-blur-md">
              <ShieldCheck className="size-5 shrink-0 text-sand" />
              <p className="text-sm font-semibold leading-tight text-cloud">
                {locale === 'ar'
                  ? 'منظمة مستقلة وشفافة · منذ 2015'
                  : locale === 'fr'
                    ? 'Indépendante & transparente · Depuis 2015'
                    : 'Independent & transparent · Since 2015'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <DuneDivider fill="fill-cloud" />
    </section>
  );
}
