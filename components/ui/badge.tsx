import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
  {
    variants: {
      variant: {
        blue: 'bg-blue/10 text-blue',
        green: 'bg-green/12 text-green-600',
        sand: 'bg-sand/15 text-sand-600',
        muted: 'bg-mist text-muted-foreground',
        white: 'bg-white/15 text-white backdrop-blur',
      },
    },
    defaultVariants: { variant: 'blue' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
