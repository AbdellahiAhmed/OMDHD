'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

export function ContactForm() {
  const t = useTranslations('ContactPage');
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function set<K extends keyof typeof values>(k: K, v: string) {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (!values.name.trim()) e.name = t('errorRequired');
    if (!values.email.trim()) e.email = t('errorRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = t('errorEmail');
    if (!values.subject.trim()) e.subject = t('errorRequired');
    if (!values.message.trim()) e.message = t('errorRequired');
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    // Demo only — wire to your API route / CMS / email service.
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
        <Field label={t('name')} htmlFor="contact-name" error={errors.name}>
          <Input
            id="contact-name"
            value={values.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder={t('namePlaceholder')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
        </Field>
        <Field label={t('email')} htmlFor="contact-email" error={errors.email}>
          <Input
            id="contact-email"
            type="email"
            dir="ltr"
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder={t('emailPlaceholder')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
        </Field>
      </div>
      <Field label={t('subject')} htmlFor="contact-subject" error={errors.subject}>
        <Input
          id="contact-subject"
          value={values.subject}
          onChange={(e) => set('subject', e.target.value)}
          placeholder={t('subjectPlaceholder')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
        />
      </Field>
      <Field label={t('message')} htmlFor="contact-message" error={errors.message}>
        <Textarea
          id="contact-message"
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder={t('messagePlaceholder')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
      </Field>

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        <Send className="size-4" />
        {sending ? t('sending') : t('send')}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 text-xs font-medium text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
