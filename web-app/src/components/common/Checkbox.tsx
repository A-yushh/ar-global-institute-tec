// Reusable Formik-compatible Checkbox Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'label'> {
  name: string;
  label?: ReactNode;
  children?: ReactNode;
  error?: string;
  touched?: boolean;
}

export const Checkbox = memo(function Checkbox({
  name,
  label,
  children,
  checked,
  onChange,
  onBlur,
  error,
  touched,
  id,
  className = '',
  disabled = false,
  ...rest
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${name}`;
  const hasError = Boolean(touched && error);

  return (
    <div className={`flex flex-col gap-1 text-left ${className}`}>
      <label htmlFor={checkboxId} className="inline-flex items-start gap-2.5 cursor-pointer select-none text-sm text-text-secondary leading-snug">
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={Boolean(checked)}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className="mt-0.5 w-4.5 h-4.5 rounded accent-primary border-border-medium cursor-pointer"
          aria-invalid={hasError}
          {...rest}
        />
        <span>{children || label}</span>
      </label>

      {hasError && (
        <p className="text-xs text-error ml-7 mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Checkbox;
