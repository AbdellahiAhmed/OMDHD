import { cn } from '@/lib/utils';

/**
 * Organic dune-curve section divider — the signature shape language of the
 * site. Sits at the top or bottom edge of a band to flow between colors.
 */
export function DuneDivider({
  className,
  fill = 'fill-cloud',
  flip = false,
  position = 'bottom',
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
  position?: 'top' | 'bottom';
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 z-10 leading-[0]',
        position === 'bottom' ? 'bottom-0' : 'top-0',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn(
          'h-[60px] w-full sm:h-[90px] lg:h-[120px]',
          fill,
          flip && 'rotate-180'
        )}
      >
        <path d="M0,64 C240,128 480,16 720,40 C960,64 1200,128 1440,72 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}
