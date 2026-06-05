import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/** OMDHD emblem — an abstract figure rising over a dune, in the brand triad. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true">
      <defs>
        <linearGradient id="omdhd-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#063B73" />
          <stop offset="1" stopColor="#04274d" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#omdhd-g)" />
      {/* sun / head */}
      <circle cx="24" cy="17" r="5.2" fill="#D9A441" />
      {/* rising figure body */}
      <path
        d="M14 33c0-5.5 4.5-10 10-10s10 4.5 10 10"
        fill="none"
        stroke="#6BCB77"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* dune */}
      <path
        d="M9 39c4-3 7-3 10 0s7 3 10 0 7-3 10 0"
        fill="none"
        stroke="#F8FAF7"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
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
            'text-lg font-extrabold tracking-tight',
            tone === 'light' ? 'text-cloud' : 'text-blue'
          )}
        >
          {t('shortName')}
        </span>
        <span
          className={cn(
            'mt-1 max-w-[16rem] text-[0.66rem] font-medium leading-tight',
            tone === 'light' ? 'text-cloud/70' : 'text-muted-foreground'
          )}
        >
          {t('tagline')}
        </span>
      </span>
    </Link>
  );
}
