'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Heart, ShieldCheck, Gift, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const PRESETS = [500, 1000, 2500, 5000];

export function DonateWidget() {
  const t = useTranslations('DonatePage');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState('');

  const active = custom ? Number(custom) || 0 : amount;

  const impact =
    active >= 2500 ? t('impact3') : active >= 1000 ? t('impact2') : t('impact1');

  return (
    <div className="rounded-[2rem] border border-border/70 bg-white p-7 shadow-lift sm:p-9">
      {/* Frequency */}
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-mist/70 p-1.5">
        {(['once', 'monthly'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            aria-pressed={frequency === f}
            className={cn(
              'rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300',
              frequency === f ? 'bg-white text-blue shadow-soft' : 'text-muted-foreground hover:text-ink'
            )}
          >
            {f === 'once' ? t('frequencyOnce') : t('frequencyMonthly')}
          </button>
        ))}
      </div>

      {/* Amounts */}
      <p className="mt-7 text-sm font-bold text-ink">{t('chooseAmount')}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => {
              setAmount(p);
              setCustom('');
            }}
            className={cn(
              'rounded-2xl border-2 py-4 text-center transition-all duration-300',
              active === p && !custom
                ? 'border-sand bg-sand/10 text-ink shadow-soft'
                : 'border-border bg-white text-ink hover:border-sand/50'
            )}
          >
            <span className="block text-xl font-extrabold">{p.toLocaleString('en-US')}</span>
            <span className="mt-0.5 block text-[0.7rem] text-muted-foreground">{t('currency')}</span>
          </button>
        ))}
      </div>

      {/* Custom */}
      <div className="mt-4">
        <label htmlFor="custom-amount" className="sr-only">{t('custom')}</label>
        <Input
          id="custom-amount"
          type="number"
          min={0}
          inputMode="numeric"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder={t('customPlaceholder')}
        />
      </div>

      {/* Impact hint */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-green/8 p-4">
        <Gift className="mt-0.5 size-5 shrink-0 text-green-600" />
        <p className="text-sm font-medium text-ink">{impact}</p>
      </div>

      {submitted ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green/30 bg-green/8 p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
          <p className="text-sm font-medium text-ink">
            {locale === 'ar'
              ? `شكرًا لك! سُجّلت نيّة تبرعك بمبلغ ${active.toLocaleString('en-US')} ${t('currency')}. سنتواصل لإتمام العملية عبر بوابة دفع آمنة.`
              : locale === 'fr'
                ? `Merci ! Votre intention de don de ${active.toLocaleString('en-US')} ${t('currency')} est enregistrée. Le paiement sécurisé arrive bientôt.`
                : `Thank you! Your ${active.toLocaleString('en-US')} ${t('currency')} donation is recorded. Secure payment is coming soon.`}
          </p>
        </div>
      ) : (
        <Button
          size="lg"
          variant="gold"
          className="mt-6 w-full"
          onClick={() => setSubmitted(true)}
        >
          <Heart className="size-5" />
          {t('donateNow')} — {active.toLocaleString('en-US')} {t('currency')}
        </Button>
      )}

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-4 text-green-600" />
        {t('secure')}
      </p>
    </div>
  );
}
