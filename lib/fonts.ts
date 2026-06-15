import { Inter, Tajawal } from 'next/font/google';

/** Latin typeface — French / English institutional body + UI. */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

/** Arabic typeface — first-class Arabic display + body. */
export const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  display: 'swap',
  weight: ['400', '500', '700', '800'],
});
