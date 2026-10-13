// Reusable Card Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variantStyles: Record<string, string> = {
  default: 'bg-bg-card shadow-sm border border-border-light',
  elevated: 'bg-bg-card shadow-lg border border-border-light',
  outlined: 'bg-bg-card shadow-none border-[1.5px] border-border-light',
  interactive:
    'bg-bg-card shadow-sm border border-border-light cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 transition-all duration-200',
};

const paddingStyles: Record<string, string> = {
  none: 'p-0',
  sm: 'p-3.5',
  md: 'p-5',
  lg: 'p-7',
};

export const Card = memo(function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  ...rest
}: CardProps) {
  const isInteractive = Boolean(onClick) || variant === 'interactive';
  const effectiveVariant = isInteractive ? 'interactive' : variant;

  const combinedClasses = `rounded-2xl overflow-hidden relative text-left ${variantStyles[effectiveVariant]} ${paddingStyles[padding]} ${className}`.trim();

  return (
    <div
      className={combinedClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Card;
