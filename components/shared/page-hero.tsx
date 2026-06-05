import { Container } from './container';
import { DuneDivider } from './dune-divider';
import { Reveal } from './reveal';
import { Link } from '@/i18n/navigation';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Institutional inner-page hero: deep-blue mesh band with dune transition. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden mesh-blue pb-28 pt-36 text-cloud sm:pt-40 grain">
      {/* institutional texture — gold seam + fine dot grid (no blur-blobs) */}
      <div className="absolute inset-x-0 top-0 h-px seam-gold" aria-hidden="true" />
      <div className="absolute inset-0 dotgrid" aria-hidden="true" />

      <Container className="relative">
        {breadcrumb ? (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-cloud/70">
            {breadcrumb.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {i > 0 && <ChevronLeft className="size-3.5 rtl:rotate-180" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-sand">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-cloud">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <Reveal>
            <span className="eyebrow text-sand">
              <span className="rule-gold" aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>
        ) : null}

        <Reveal delay={0.05}>
          <h1 className={cn('h-display mt-5 max-w-4xl text-balance text-cloud', 'text-4xl sm:text-5xl lg:text-6xl')}>
            {title}
          </h1>
        </Reveal>

        {subtitle ? (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cloud/80">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </Container>

      <DuneDivider fill="fill-cloud" />
    </section>
  );
}
