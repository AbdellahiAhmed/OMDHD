import { pick, type Partner } from '@/content/types';
import { cn } from '@/lib/utils';

/**
 * Renders a partner's real logo image (muted grayscale → full colour on hover,
 * a classic institutional partner-wall treatment). Falls back to an elegant
 * monogram when no logo file is provided.
 */
export function PartnerLogo({
  partner,
  locale,
  className,
}: {
  partner: Partner;
  locale: string;
  className?: string;
}) {
  if (partner.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={partner.logo}
        alt={pick(partner.name, locale)}
        loading="lazy"
        className={cn(
          'h-12 w-auto max-w-[90%] object-contain opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0',
          className
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        'flex h-12 min-w-12 items-center justify-center rounded-xl bg-blue/8 px-4 text-base font-extrabold tracking-tight text-blue transition-colors group-hover:bg-blue group-hover:text-cloud',
        className
      )}
    >
      {partner.monogram}
    </span>
  );
}
