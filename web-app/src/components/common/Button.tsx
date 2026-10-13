// Reusable Button Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-lg active:translate-y-0 hover:-translate-y-0.5',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary-pale hover:border-primary-dark',
  text: 'bg-transparent text-primary border-transparent hover:bg-primary-pale px-2',
  secondary:
    'bg-bg-light text-text-primary border border-border-light hover:bg-border-light',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-3.5 py-1.5 text-xs h-[34px]',
  md: 'px-5 py-2.5 text-sm h-[42px]',
  lg: 'px-7 py-3.5 text-base h-[52px] rounded-xl',
};

export const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  disabled = false,
  className = '',
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg cursor-pointer transition-all duration-200 outline-none gap-2 whitespace-nowrap select-none focus-visible:ring-3 focus-visible:ring-primary/25';
  const widthClass = fullWidth ? 'w-full' : '';
  const stateClass = disabled || isLoading ? 'opacity-60 cursor-not-allowed !transform-none !shadow-none' : '';

  const combinedClasses = `${baseClasses} ${variantStyles[variant] || ''} ${sizeStyles[size] || ''} ${widthClass} ${stateClass} ${className}`.trim();

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={combinedClasses}
      onClick={onClick}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading && (
        <span
          className="w-4 h-4 border-2 border-white/40 border-t-current rounded-full animate-spin inline-block"
          aria-hidden="true"
        />
      )}
      {!isLoading && startIcon && <span className="inline-flex items-center">{startIcon}</span>}
      <span>{children}</span>
      {!isLoading && endIcon && <span className="inline-flex items-center">{endIcon}</span>}
    </button>
  );
});

export default Button;
