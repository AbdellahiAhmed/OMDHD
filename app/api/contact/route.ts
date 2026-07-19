import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !subject || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_input' }, { status: 400 });
  }

  try {
    await sendMail({
      subject: `[OMDHD — Contact] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact form send failed', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
