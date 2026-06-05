'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Demo only — wire to your ESP / CMS endpoint.
    setDone(true);
  }

  return (
    <section className="relative bg-cloud pb-8">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-sand px-6 py-14 shadow-glow sm:px-12 lg:py-16 grain">

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-2 text-sm font-bold text-ink">
              <Mail className="size-4" />
              {t('eyebrow')}
            </span>
            <h2 className="h-display mt-5 text-balance text-3xl text-ink sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-pretty text-ink/75">{t('subtitle')}</p>

            {done ? (
              <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cloud">
                <CheckCircle2 className="size-5 text-green-300" />
                {t('success')}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  {t('placeholder')}
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  className="border-transparent bg-white/95 text-center sm:text-start"
                />
                <Button type="submit" variant="primary" size="lg" className="shrink-0">
                  <Send className="size-4" />
                  {t('cta')}
                </Button>
              </form>
            )}

            <p className="mt-5 text-xs text-ink/60">{t('consent')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
