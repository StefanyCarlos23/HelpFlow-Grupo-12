import { type ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-pop disabled:bg-primary-300 disabled:shadow-none',
  secondary:
    'bg-white text-ink border border-line hover:bg-surface hover:border-primary-300 active:border-primary-400',
  ghost: 'text-ink-muted hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', fullWidth = false, className = '', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1 disabled:cursor-not-allowed ${
        fullWidth ? 'w-full' : ''
      } ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
