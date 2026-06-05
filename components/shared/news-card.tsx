import { ArrowUpLeft, ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SmartImage } from './smart-image';
import { Badge } from '@/components/ui/badge';
import { pick, type NewsArticle } from '@/content/types';
import { categoryLabels } from '@/content/labels';
import { formatDate, cn } from '@/lib/utils';

export function NewsCard({
  article,
  locale,
  featured = false,
}: {
  article: NewsArticle;
  locale: string;
  featured?: boolean;
}) {
  const Arrow = locale === 'ar' ? ArrowUpLeft : ArrowUpRight;

  return (
    <Link
      href={`/news/${article.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift',
        featured && 'lg:flex-row'
      )}
    >
      <div className={cn('relative overflow-hidden', featured ? 'lg:w-1/2' : '')}>
        <SmartImage
          src={article.cover}
          alt={pick(article.title, locale)}
          fill
          rounded="rounded-none"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn('aspect-[16/10] w-full', featured && 'lg:h-full lg:aspect-auto')}
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 ltr:left-4 rtl:right-4">
          <Badge variant="white">{pick(categoryLabels[article.category], locale)}</Badge>
        </span>
      </div>

      <div className={cn('flex flex-1 flex-col p-6', featured && 'lg:w-1/2 lg:p-8')}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-sand" />
            {formatDate(article.date, locale)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-sand" />
            {pick(article.location, locale)}
          </span>
        </div>

        <h3
          className={cn(
            'mt-3 font-bold leading-snug text-ink transition-colors group-hover:text-blue',
            featured ? 'text-2xl' : 'text-lg'
          )}
        >
          {pick(article.title, locale)}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {pick(article.excerpt, locale)}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          <span className="link-grow">{locale === 'ar' ? 'اقرأ المزيد' : locale === 'fr' ? 'Lire la suite' : 'Read more'}</span>
          <Arrow className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
