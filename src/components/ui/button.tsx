import { faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '~/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[10px] cursor-pointer select-none transition-all hover:lg:opacity-80',
  {
    variants: {
      variant: {
        default: '',
        primary: 'text-base-black bg-primary',
        green: 'text-white bg-[#01AF70]',
        grey: 'text-white bg-[#12294A]',
        red: 'text-white bg-[#FF0960]',
        purple: 'text-white bg-[#3555FF]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, children, loading, icon, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, className }),
          icon && 'gap-1',
          props.disabled && 'text-greys-200 bg-greys-600 cursor-not-allowed',
          loading && 'opacity-70',
        )}
        // @ts-ignore
        ref={ref}
        {...props}
        {...(!loading && !props.disabled && { onClick })}
        disabled={loading}
      >
        {loading && <FontAwesomeIcon icon={faBone} className='mr-2 animate-spin' />}
        {icon}
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
