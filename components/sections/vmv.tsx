import { useTranslations } from 'next-intl';
import { Eye, Target, Gem } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { DuneDivider } from '@/components/shared/dune-divider';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';

export function VMV() {
  const t = useTranslations('VMV');

  const panels = [
    { icon: Eye, title: t('vision'), text: t('visionText'), accent: 'text-sand' },
    { icon: Target, title: t('mission'), text: t('missionText'), accent: 'text-green-300' },
    { icon: Gem, title: t('values'), text: t('valuesText'), accent: 'text-blue-200' },
  ];

  return (
    <section className="relative isolate overflow-hidden mesh-blue py-28 text-cloud lg:py-36 grain">
      <DuneDivider position="top" fill="fill-cloud" flip />
      <div className="absolute inset-0 dotgrid" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {panels.map((p) => (
            <RevealItem key={p.title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/12">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                  <p.icon className={`size-7 ${p.accent}`} />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-cloud">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-cloud/75">{p.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gold-line transition-all duration-500 group-hover:w-full" aria-hidden="true" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <DuneDivider fill="fill-cloud" />
    </section>
  );
}
