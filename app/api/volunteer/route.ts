import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
  const area = typeof body?.area === 'string' ? body.area.trim() : '';
  const motivation = typeof body?.motivation === 'string' ? body.motivation.trim() : '';

  if (!name || !email || !area || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_input' }, { status: 400 });
  }

  try {
    await sendMail({
      subject: `[OMDHD — Bénévolat] ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nArea: ${area}\n\n${motivation || '—'}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('volunteer form send failed', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
