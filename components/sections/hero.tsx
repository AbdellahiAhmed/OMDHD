'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { DuneDivider } from '@/components/shared/dune-divider';
import { heroSrc } from '@/content/images';
import { cn } from '@/lib/utils';

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

  const trust =
    locale === 'ar'
      ? 'منظمة مستقلة وشفافة · منذ 2015'
      : locale === 'fr'
        ? 'Indépendante et transparente · depuis 2015'
        : 'Independent and transparent · since 2015';

  const heroAlt =
    locale === 'ar'
      ? 'أطفال موريتانيون يرفعون أيديهم نحو الأمل'
      : locale === 'fr'
        ? 'Des enfants mauritaniens, les mains tendues vers l’avenir'
        : 'Mauritanian children reaching their hands toward hope';

  return (
    <section className="relative isolate overflow-hidden bg-blue-900 pb-32 pt-32 text-cloud sm:pt-36 lg:pb-40 lg:pt-44">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(165deg, #04274d 0%, #063B73 58%, #053161 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sand/70 to-transparent"
        aria-hidden="true"
      />
      {/* one soft directional light behind the headline — not a blob cluster */}
      <div
        className="absolute top-0 -z-10 h-[34rem] w-[34rem] rounded-full opacity-50 ltr:left-[-6rem] rtl:right-[-6rem]"
        style={{ background: 'radial-gradient(circle, rgba(31,138,76,0.16), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-sand" />
            <span
              className={cn(
                'text-sm font-semibold text-sand',
                locale !== 'ar' && 'uppercase tracking-[0.16em]'
              )}
            >
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="h-display mt-7 whitespace-pre-line text-balance text-[2.8rem] leading-[1.04] text-cloud sm:text-6xl lg:text-[4.5rem]"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cloud/75 lg:text-xl"
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
            className="mt-10 inline-flex items-center gap-2.5 text-sm font-medium text-cloud/70"
          >
            <ShieldCheck className="size-4 shrink-0 text-sand" />
            {trust}
          </motion.p>
        </div>

        {/* Visual — let the photograph be the design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] bg-blue-800 ring-1 ring-white/10 lg:max-w-none">
            <Image
              src={heroSrc()}
              alt={heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-blue-900/45 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          {/* quiet anchor: a thin gold tick at the leading-bottom corner */}
          <div
            className="absolute -bottom-3 h-12 w-12 border-sand/70 ltr:-left-3 ltr:border-b-2 ltr:border-l-2 rtl:-right-3 rtl:border-b-2 rtl:border-r-2"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      <DuneDivider fill="fill-cloud" />
    </section>
  );
}
