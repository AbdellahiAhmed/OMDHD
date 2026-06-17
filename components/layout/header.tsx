'use client';

import { useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Heart } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { Logo } from './logo';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';
import { Button } from '@/components/ui/button';
import { identityLinks } from '@/content/site';
import { cn } from '@/lib/utils';

const mainLinks = [
  { key: 'areas', label: 'areasShort', href: '/intervention-areas' },
  { key: 'news', label: 'newsShort', href: '/news' },
  { key: 'reports', label: 'reportsShort', href: '/reports' },
  { key: 'partners', label: 'partners', href: '/partners' },
  { key: 'gallery', label: 'gallery', href: '/gallery' },
  { key: 'contact', label: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const identityActive = identityLinks.some((l) => isActive(l.href));
  // The header sits on a constant deep-blue surface: it never transforms on
  // scroll. It blends over the (blue) hero and stays a clean bar over light
  // sections, so there is no jumpy scroll transition.
  const light = true;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-800 py-3.5 shadow-[0_12px_30px_-16px_rgba(2,10,28,0.65)]">
      <div className="container flex items-center justify-between gap-4">
        <Logo tone={light ? 'light' : 'dark'} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {/* Identity dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.875rem] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sand',
                light
                  ? 'text-cloud/90 hover:bg-white/10 hover:text-cloud'
                  : 'text-ink hover:bg-mist',
                identityActive && (light ? 'text-cloud' : 'text-blue')
              )}
            >
              {t('identityShort')}
              <ChevronDown className="size-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="z-50 min-w-[12rem] overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-lift data-[state=open]:animate-fade-in"
            >
              {identityLinks.map((l) => (
                <DropdownMenuItem key={l.key} asChild>
                  <Link
                    href={l.href}
                    className={cn(
                      'flex cursor-pointer items-center rounded-xl px-3 py-2.5 text-sm font-medium text-ink outline-none transition-colors focus:bg-mist data-[highlighted]:bg-mist',
                      isActive(l.href) && 'text-blue'
                    )}
                  >
                    {t(l.key)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={cn(
                'relative whitespace-nowrap rounded-full px-3 py-2 text-[0.875rem] font-semibold transition-colors',
                light
                  ? 'text-cloud/90 hover:bg-white/10 hover:text-cloud'
                  : 'text-ink hover:bg-mist',
                isActive(l.href) &&
                  (light
                    ? 'text-cloud after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sand'
                    : 'text-blue after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sand')
              )}
            >
              {t(l.label)}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2.5">
          <div className="hidden md:block">
            <LanguageSwitcher tone={light ? 'light' : 'dark'} />
          </div>
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <Link href="/donate">
              <Heart className="size-4" />
              {t('donate')}
            </Link>
          </Button>
          <MobileNav tone={light ? 'light' : 'dark'} />
        </div>
      </div>
    </header>
  );
}
