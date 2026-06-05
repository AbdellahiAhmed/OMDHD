'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Check, Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeNames, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand',
          tone === 'light'
            ? 'border-white/25 text-cloud hover:bg-white/10'
            : 'border-border text-ink hover:border-blue/40 hover:bg-blue/5',
          isPending && 'opacity-60'
        )}
        aria-label="Language"
      >
        <Globe className="size-4" />
        <span className="font-arabic">{localeNames[locale as Locale]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="z-50 min-w-[11rem] overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-lift data-[state=open]:animate-fade-in"
      >
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onSelect={() => switchTo(l)}
            className={cn(
              'flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-ink outline-none transition-colors',
              'focus:bg-mist data-[highlighted]:bg-mist',
              l === locale && 'text-blue'
            )}
          >
            <span className={l === 'ar' ? 'font-arabic' : ''}>{localeNames[l]}</span>
            {l === locale && <Check className="size-4 text-sand" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
