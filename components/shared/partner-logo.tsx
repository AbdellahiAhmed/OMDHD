import type { Partner } from '@/content/types';
import { cn } from '@/lib/utils';

/**
 * Renders a partner's real logo image (muted grayscale → full colour on hover,
 * a classic institutional partner-wall treatment). Falls back to an elegant
 * monogram when no logo file is provided.
 */
export function PartnerLogo({
  partner,
  className,
}: {
  partner: Partner;
  className?: string;
}) {
  if (partner.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className={cn(
          'h-9 w-auto max-w-[78%] object-contain opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0',
          className
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        'flex h-12 min-w-12 items-center justify-center rounded-xl bg-blue/8 px-3 text-sm font-extrabold tracking-tight text-blue transition-colors group-hover:bg-blue group-hover:text-cloud',
        className
      )}
    >
      {partner.monogram}
    </span>
  );
}
