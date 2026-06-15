import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Icon } from './icon';
import { pick, type InterventionArea } from '@/content/types';
import { accentClasses } from '@/content/labels';
import { cn } from '@/lib/utils';

export function AreaCard({
  area,
  locale,
  exploreLabel,
  index = 0,
}: {
  area: InterventionArea;
  locale: string;
  exploreLabel: string;
  index?: number;
}) {
  const accent = accentClasses[area.accent];
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={`/intervention-areas/${area.slug}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift focus-visible:-translate-y-1.5'
      )}
    >
      {/* Header row: icon + a small, intentional index number (well inside padding) */}
      <div className="relative flex items-center justify-between">
        <span
          className={cn(
            'flex size-16 items-center justify-center rounded-2xl ring-1 transition-transform duration-500 group-hover:scale-110',
            accent.soft,
            accent.ring
          )}
        >
          <Icon name={area.icon} className={cn('size-8', accent.text)} />
        </span>
        <span
          className={cn(
            'text-lg font-extrabold leading-none tabular-nums opacity-40 transition-opacity duration-500 group-hover:opacity-90',
            accent.text
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-bold text-ink">
        {pick(area.title, locale)}
      </h3>
      <p className="relative mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
        {pick(area.summary, locale)}
      </p>

      <span
        className={cn(
          'relative mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300',
          accent.text
        )}
      >
        {exploreLabel}
        <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-0 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </span>

      {/* Bottom accent bar grows on hover */}
      <span
        className={cn(
          'absolute inset-x-0 bottom-0 h-1 w-0 transition-all duration-500 group-hover:w-full',
          accent.bg
        )}
        aria-hidden="true"
      />
    </Link>
  );
}
