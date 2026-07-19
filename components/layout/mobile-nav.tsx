'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, Heart, HandHeart, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LogoMark } from './logo';
import { LanguageSwitcher } from './language-switcher';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'vision', href: '/vision' },
  { key: 'mission', href: '/mission' },
  { key: 'values', href: '/values' },
  { key: 'areas', href: '/intervention-areas' },
  { key: 'news', href: '/news' },
  { key: 'gallery', href: '/gallery' },
  { key: 'contact', href: '/contact' },
];

export function MobileNav({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-full border transition-colors xl:hidden',
            tone === 'light'
              ? 'border-white/30 text-cloud hover:bg-white/10'
              : 'border-border text-ink hover:bg-mist'
          )}
          aria-label={t('openMenu')}
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className={cn(
            'fixed inset-y-0 z-[70] flex w-[min(22rem,90vw)] flex-col bg-cloud shadow-lift outline-none',
            'ltr:right-0 rtl:left-0',
            'data-[state=open]:animate-fade-in'
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-9" />
              <span className="text-base font-extrabold text-blue">{t('menu')}</span>
            </div>
            <Dialog.Close
              className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist"
              aria-label={t('close')}
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.key}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between rounded-2xl px-4 py-3 text-[1.05rem] font-semibold transition-colors',
                      isActive(l.href)
                        ? 'bg-blue/8 text-blue'
                        : 'text-ink hover:bg-mist'
                    )}
                  >
                    {t(l.key)}
                    {isActive(l.href) && <Arrow className="size-4 text-sand" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border p-5">
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="gold" size="md" className="w-full">
                <Link href="/donate" onClick={() => setOpen(false)}>
                  <Heart className="size-4" />
                  {t('donate')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="md" className="w-full">
                <Link href="/volunteer" onClick={() => setOpen(false)}>
                  <HandHeart className="size-4" />
                  {t('volunteer')}
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
