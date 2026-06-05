import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-[140px] w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors',
      'placeholder:text-muted-foreground/70',
      'focus-visible:border-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand/50',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
