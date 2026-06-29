import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/**
 * OMDHD emblem (the organization's real logo) shown on a clean white badge so
 * it stays legible on dark surfaces (hero header, footer) and light surfaces
 * alike. The source artwork has a white background, which merges into the badge.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-1 ring-black/5',
        className
      )}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/omdhd-mark.png" alt="" className="h-full w-full object-contain" />
    </span>
  );
}

export function Logo({
  className,
  tone = 'dark',
}: {
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const t = useTranslations('Meta');
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label={t('siteName')}
    >
      <LogoMark className="size-11 shrink-0 transition-transform duration-500 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-base font-extrabold tracking-tight sm:text-lg',
            tone === 'light' ? 'text-cloud' : 'text-blue'
          )}
        >
          {t('shortName')}
        </span>
        {/* Full organization name (localized) */}
        <span
          className={cn(
            'mt-1 hidden max-w-[17rem] text-[0.6rem] font-semibold leading-[1.2] sm:block',
            tone === 'light' ? 'text-cloud/85' : 'text-ink/85'
          )}
        >
          {t('siteName')}
        </span>
        {/* Slogan */}
        <span
          className={cn(
            'mt-1 hidden max-w-[17rem] text-[0.56rem] font-medium leading-tight sm:block',
            tone === 'light' ? 'text-cloud/55' : 'text-muted-foreground'
          )}
        >
          {t('tagline')}
        </span>
      </span>
    </Link>
  );
}
