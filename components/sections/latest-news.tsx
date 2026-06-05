import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { NewsCard } from '@/components/shared/news-card';
import { Button } from '@/components/ui/button';
import { RevealGroup, RevealItem } from '@/components/shared/reveal';
import { news } from '@/content/news';

export function LatestNews() {
  const t = useTranslations('LatestNews');
  const locale = useLocale();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => n.slug !== featured.slug).slice(0, 3);

  return (
    <section className="relative bg-mist/40 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            className="max-w-xl"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/news">
              {t('cta')}
              <Arrow className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 space-y-6">
          <NewsCard article={featured} locale={locale} featured />
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
            {rest.map((article) => (
              <RevealItem key={article.slug} className="h-full">
                <NewsCard article={article} locale={locale} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
