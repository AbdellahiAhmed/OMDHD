'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Inbox } from 'lucide-react';
import { NewsCard } from '@/components/shared/news-card';
import { categoryLabels } from '@/content/labels';
import { newsCategories } from '@/content/news';
import { pick, type NewsArticle } from '@/content/types';
import { cn } from '@/lib/utils';

export function NewsList({
  articles,
  locale,
}: {
  articles: NewsArticle[];
  locale: string;
}) {
  const t = useTranslations('NewsPage');
  const tc = useTranslations('Common');
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(
    () => (active === 'all' ? articles : articles.filter((a) => a.category === active)),
    [active, articles]
  );

  const chips = ['all', ...newsCategories];

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {chips.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                isActive
                  ? 'bg-blue text-cloud shadow-soft'
                  : 'border border-border bg-white text-ink hover:border-blue/40 hover:bg-blue/5'
              )}
            >
              {c === 'all'
                ? t('filterAll')
                : pick(categoryLabels[c as NewsArticle['category']], locale)}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <NewsCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-border bg-white/60 py-20 text-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-mist">
            <Inbox className="size-8 text-muted-foreground" />
          </span>
          <p className="mt-5 text-lg font-semibold text-ink">{tc('empty')}</p>
          <p className="mt-2 text-sm text-muted-foreground">{tc('emptyHint')}</p>
        </div>
      )}
    </div>
  );
}
