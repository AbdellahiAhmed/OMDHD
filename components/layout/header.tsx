'use client';

import { useEffect, useState } from 'react';
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
  { key: 'areas', href: '/intervention-areas' },
  { key: 'news', href: '/news' },
  { key: 'reports', href: '/reports' },
  { key: 'partners', href: '/partners' },
  { key: 'gallery', href: '/gallery' },
  { key: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const identityActive = identityLinks.some((l) => isActive(l.href));
  const light = !scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-border/60 py-2 shadow-soft'
          : 'border-b border-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <Logo tone={light ? 'light' : 'dark'} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Identity dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sand',
                light
                  ? 'text-cloud/90 hover:bg-white/10 hover:text-cloud'
                  : 'text-ink hover:bg-mist',
                identityActive && (light ? 'text-cloud' : 'text-blue')
              )}
            >
              {t('identity')}
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
                'relative rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors',
                light
                  ? 'text-cloud/90 hover:bg-white/10 hover:text-cloud'
                  : 'text-ink hover:bg-mist',
                isActive(l.href) &&
                  (light
                    ? 'text-cloud after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sand'
                    : 'text-blue after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sand')
              )}
            >
              {t(l.key)}
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
