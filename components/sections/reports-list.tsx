'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FileText, Download, FileBarChart, BookOpen, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { typeLabels } from '@/content/labels';
import { pick, type Publication, type ReportType } from '@/content/types';
import { cn } from '@/lib/utils';

const typeIcon: Record<ReportType, typeof FileText> = {
  report: FileBarChart,
  study: FileText,
  guide: BookOpen,
  magazine: Newspaper,
};

const typeAccent: Record<ReportType, string> = {
  report: 'from-blue to-blue-800',
  study: 'from-green-600 to-green-700',
  guide: 'from-sand-500 to-sand-600',
  magazine: 'from-blue-700 to-ink-900',
};

export function ReportsList({
  publications,
  locale,
}: {
  publications: Publication[];
  locale: string;
}) {
  const t = useTranslations('ReportsPage');
  const [active, setActive] = useState<string>('all');

  const types = useMemo(
    () => Array.from(new Set(publications.map((p) => p.type))),
    [publications]
  );
  const filtered = useMemo(
    () => (active === 'all' ? publications : publications.filter((p) => p.type === active)),
    [active, publications]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {['all', ...types].map((c) => {
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
              {c === 'all' ? t('filterAll') : pick(typeLabels[c as ReportType], locale)}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pub) => {
          const Icon = typeIcon[pub.type];
          return (
            <div
              key={pub.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Branded cover */}
              <div className={cn('relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br', typeAccent[pub.type])}>
                <div className="absolute inset-0 grain opacity-60" aria-hidden="true" />
                <Icon className="relative size-14 text-white/90" />
                <span className="absolute top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur ltr:left-4 rtl:right-4">
                  {pick(typeLabels[pub.type], locale)}
                </span>
                <span className="absolute bottom-4 text-sm font-bold text-white/85 ltr:right-4 rtl:left-4">
                  {pub.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-blue">
                  {pick(pub.title, locale)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pick(pub.description, locale)}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {pub.pages} {t('pages')}
                  </span>
                  <Button asChild variant="outline" size="sm">
                    <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="size-4" />
                      {t('download')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
