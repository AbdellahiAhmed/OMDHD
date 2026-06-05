import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

/**
 * next/image wrapped in a brand-gradient surface. If the remote asset fails to
 * load, the gradient still reads as an intentional, on-brand composition rather
 * than an empty white box.
 */
export function SmartImage({
  className,
  imgClassName,
  rounded = 'rounded-3xl',
  ...props
}: ImageProps & { imgClassName?: string; rounded?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-institution', rounded, className)}>
      <div className="absolute inset-0 mesh-blue opacity-90" aria-hidden="true" />
      <Image
        {...props}
        className={cn('relative h-full w-full object-cover', imgClassName)}
      />
    </div>
  );
}
