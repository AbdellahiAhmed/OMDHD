import nodemailer from 'nodemailer';
import { siteConfig } from '@/content/site';

/**
 * SMTP transport for the contact/volunteer forms. Configure via env vars on
 * the hosting side (cPanel Node.js App → Environment Variables) — never
 * commit real credentials. Falls back gracefully to a clear error if unset,
 * rather than silently pretending the message was sent.
 */
function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendMail({
  subject,
  replyTo,
  text,
}: {
  subject: string;
  replyTo?: string;
  text: string;
}) {
  const transport = getTransport();
  if (!transport) {
    throw new Error('SMTP is not configured (missing SMTP_HOST / SMTP_USER / SMTP_PASS env vars)');
  }
  await transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO || siteConfig.email,
    replyTo,
    subject,
    text,
  });
}
