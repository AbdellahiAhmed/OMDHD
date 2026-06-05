import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-cloud disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-blue text-cloud shadow-soft hover:bg-blue-700 hover:shadow-lift',
        secondary:
          'bg-green text-white shadow-soft hover:bg-green-600 hover:shadow-lift',
        gold: 'bg-sand text-ink shadow-soft hover:bg-sand-500 hover:shadow-glow',
        outline:
          'border border-blue/25 bg-transparent text-blue hover:border-blue hover:bg-blue/5',
        ghost: 'bg-transparent text-ink hover:bg-mist',
        white:
          'bg-white text-blue shadow-soft hover:shadow-lift hover:-translate-y-0.5',
        link: 'text-blue underline-offset-4 hover:underline rounded-none',
      },
      size: {
        sm: 'h-9 px-4 text-[0.8rem]',
        md: 'h-11 px-6',
        lg: 'h-14 px-8 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
