import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  tone = 'light',
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
}) {
  const dark = tone === 'dark';
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              'eyebrow',
              dark && 'text-sand',
              align === 'center' && 'justify-center'
            )}
          >
            <span className="rule-gold" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'h-display mt-4 text-balance text-3xl sm:text-4xl lg:text-[2.7rem]',
            dark && 'text-cloud',
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-5 text-pretty text-lg leading-relaxed',
              dark ? 'text-cloud/75' : 'text-muted-foreground'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
