'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ZoomIn } from 'lucide-react';
import { pick, type GalleryItem } from '@/content/types';
import { cn } from '@/lib/utils';

const spanClass: Record<GalleryItem['span'], string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  square: '',
};

export function GalleryGrid({
  items,
  locale,
}: {
  items: GalleryItem[];
  locale: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? items[open] : null;

  return (
    <Dialog.Root open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
      <div className="grid auto-rows-[170px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={cn(
              'group relative overflow-hidden rounded-2xl bg-institution shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand',
              spanClass[item.span]
            )}
            aria-label={pick(item.caption, locale)}
          >
            <div className="absolute inset-0 mesh-blue opacity-80" aria-hidden="true" />
            <Image
              src={item.src}
              alt={pick(item.caption, locale)}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <span className="absolute inset-x-3 bottom-3 flex items-center gap-2 text-start text-xs font-semibold text-cloud opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ZoomIn className="size-4 shrink-0 text-sand" />
              <span className="line-clamp-2">{pick(item.caption, locale)}</span>
            </span>
          </button>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink-900/85 backdrop-blur-md data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed inset-0 z-[90] flex items-center justify-center p-4 outline-none sm:p-10">
          <Dialog.Title className="sr-only">
            {current ? pick(current.caption, locale) : ''}
          </Dialog.Title>
          {current && (
            <div className="relative w-full max-w-4xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-institution shadow-lift">
                <Image
                  src={current.src.replace('w=900', 'w=1600')}
                  alt={pick(current.caption, locale)}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-cloud/85">
                {pick(current.caption, locale)}
              </p>
            </div>
          )}
          <Dialog.Close
            className="fixed end-5 top-5 z-[95] inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-cloud backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
