import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CalendarDays, MapPin, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { PageHero } from '@/components/shared/page-hero';
import { SmartImage } from '@/components/shared/smart-image';
import { NewsCard } from '@/components/shared/news-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup, RevealItem } from '@/components/shared/reveal';
import { news, getNewsBySlug } from '@/content/news';
import { categoryLabels } from '@/content/labels';
import { pick } from '@/content/types';
import { formatDate } from '@/lib/utils';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    locale,
    title: pick(article.title, locale),
    description: pick(article.excerpt, locale),
    path: `/news/${slug}`,
    image: article.cover,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations('NewsPage');
  const tc = await getTranslations('Common');
  const nav = await getTranslations('Nav');
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const related = news.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={pick(categoryLabels[article.category], locale)}
        title={pick(article.title, locale)}
        subtitle={pick(article.excerpt, locale)}
        breadcrumb={[
          { label: nav('home'), href: '/' },
          { label: nav('news'), href: '/news' },
          { label: pick(article.title, locale) },
        ]}
      />

      <article className="bg-cloud py-20 lg:py-24">
        <Container>
          {/* Cover */}
          <Reveal className="mx-auto max-w-4xl">
            <SmartImage
              src={article.cover}
              alt={pick(article.title, locale)}
              fill
              priority
              sizes="(max-width: 1024px) 95vw, 900px"
              className="aspect-[16/9] w-full rounded-[2rem]"
            />
          </Reveal>

          {/* Meta */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <Badge variant="sand">{pick(categoryLabels[article.category], locale)}</Badge>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-sand" />
              {formatDate(article.date, locale)}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-sand" />
              {pick(article.location, locale)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-sand" />
              {article.readingTime} {tc('minRead')}
            </span>
          </div>

          {/* Body */}
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-ink/85">
            {pick(article.body, locale).map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className={i === 0 ? 'text-xl font-medium text-ink first-letter:float-start first-letter:me-2 first-letter:text-5xl first-letter:font-extrabold first-letter:text-blue' : ''}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-8">
            <Button asChild variant="outline">
              <Link href="/news">
                <Arrow className="size-4 rtl:rotate-180" />
                {t('backToNews')}
              </Link>
            </Button>
          </div>
        </Container>
      </article>

      {/* Related */}
      <section className="bg-mist/40 py-20 lg:py-24">
        <Container>
          <h2 className="h-display text-2xl text-ink sm:text-3xl">{t('relatedTitle')}</h2>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {related.map((n) => (
              <RevealItem key={n.slug} className="h-full">
                <NewsCard article={n} locale={locale} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
