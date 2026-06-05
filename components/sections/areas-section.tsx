import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { AreaCard } from '@/components/shared/area-card';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { interventionAreas } from '@/content/intervention-areas';

export function AreasSection() {
  const t = useTranslations('Areas');
  const locale = useLocale();

  return (
    <section className="relative bg-cloud py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <RevealGroup
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {interventionAreas.map((area, i) => (
            <RevealItem key={area.slug} className="h-full">
              <AreaCard
                area={area}
                locale={locale}
                exploreLabel={t('explore')}
                index={i}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
