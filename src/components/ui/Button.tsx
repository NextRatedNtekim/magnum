import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, Ref } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap active:scale-[0.97]';

// Liquid Glass: translucent, blurred material with a soft top highlight.
// `primary` stays high-opacity so text contrast holds up over any
// background; `outline`/`ghost` are true see-through glass.
const variants: Record<Variant, string> = {
  primary: 'glass-champagne text-ink hover:brightness-105 active:brightness-95',
  outline: 'glass-subtle text-porcelain hover:border-champagne/50 hover:bg-champagne/10',
  ghost: 'text-porcelain hover:text-champagne hover:bg-white/5',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    as?: 'button';
    to?: never;
    children: ReactNode;
  };

type ButtonAsLink = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    as: 'link';
    to: string;
    children: ReactNode;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.as === 'link') {
    const { as: _as, to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button ref={ref as Ref<HTMLButtonElement>} className={classes} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
