import { useTranslations } from 'next-intl';
import { Users, FolderKanban, GraduationCap, MapPinned } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { stats } from '@/content/stats';

const icons = {
  beneficiaries: Users,
  programs: FolderKanban,
  trainings: GraduationCap,
  regions: MapPinned,
} as const;

export function ImpactStats() {
  const t = useTranslations('Impact');

  return (
    <section className="relative bg-mist/50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {stats.map((s) => {
            const Icon = icons[s.labelKey];
            return (
              <RevealItem key={s.labelKey}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-white p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-blue/8 transition-colors group-hover:bg-blue group-hover:text-cloud">
                    <Icon className="size-7 text-blue transition-colors group-hover:text-cloud" />
                  </span>
                  <p className="mt-6 text-4xl font-extrabold text-ink lg:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {t(s.labelKey)}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-1 w-0 bg-sand transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-10 text-center text-xs text-muted-foreground/80">{t('note')}</p>
      </Container>
    </section>
  );
}
