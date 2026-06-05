'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export function VolunteerForm() {
  const t = useTranslations('VolunteerPage');
  const tc = useTranslations('ContactPage');
  const [values, setValues] = useState({ name: '', email: '', phone: '', area: '', motivation: '' });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const areas = [t('area1'), t('area2'), t('area3'), t('area4')];

  function set(k: keyof typeof values, v: string) {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = tc('errorRequired');
    if (!values.email.trim()) e.email = tc('errorRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = tc('errorEmail');
    if (!values.area) e.area = tc('errorRequired');
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-green/30 bg-green/5 px-6 py-16 text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-green/15">
          <CheckCircle2 className="size-9 text-green-600" />
        </span>
        <p className="mt-5 max-w-md text-lg font-semibold text-ink">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>{t('fullName')}</Label>
          <Input value={values.name} onChange={(e) => set('name', e.target.value)} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label>{t('email')}</Label>
          <Input type="email" dir="ltr" value={values.email} onChange={(e) => set('email', e.target.value)} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>{t('phone')}</Label>
          <Input type="tel" dir="ltr" value={values.phone} onChange={(e) => set('phone', e.target.value)} />
        </div>
        <div>
          <Label>{t('area')}</Label>
          <div className="relative">
            <select
              value={values.area}
              onChange={(e) => set('area', e.target.value)}
              aria-invalid={!!errors.area}
              className={cn(
                'h-12 w-full appearance-none rounded-2xl border border-input bg-white px-4 text-sm text-ink shadow-sm transition-colors',
                'focus-visible:border-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/50',
                !values.area && 'text-muted-foreground'
              )}
            >
              <option value="" disabled>{t('selectArea')}</option>
              {areas.map((a) => (
                <option key={a} value={a} className="text-ink">{a}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground ltr:right-4 rtl:left-4" />
          </div>
          {errors.area && <p className="mt-1.5 text-xs font-medium text-destructive">{errors.area}</p>}
        </div>
      </div>

      <div>
        <Label>{t('motivation')}</Label>
        <Textarea value={values.motivation} onChange={(e) => set('motivation', e.target.value)} placeholder={t('motivationPlaceholder')} />
      </div>

      <Button type="submit" size="lg" variant="secondary" disabled={sending} className="w-full sm:w-auto">
        <Send className="size-4" />
        {sending ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
}
