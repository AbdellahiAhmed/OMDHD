import { useTranslations } from 'next-intl';
import { Home } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden mesh-blue text-cloud grain">
      <div className="pointer-events-none absolute -top-24 size-[28rem] rounded-full bg-sand/20 blur-3xl ltr:right-0 rtl:left-0" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="h-display text-[7rem] leading-none text-sand sm:text-[10rem]">404</p>
        <h1 className="h-display mt-2 text-3xl text-cloud sm:text-4xl">{t('title')}</h1>
        <p className="mx-auto mt-4 max-w-md text-cloud/75">{t('subtitle')}</p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="gold" size="lg">
            <Link href="/">
              <Home className="size-5" />
              {t('cta')}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
