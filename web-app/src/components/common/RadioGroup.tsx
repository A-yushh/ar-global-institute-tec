// Reusable Formik-compatible RadioGroup Component with Tailwind CSS v4 in TypeScript
import { memo } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { SelectOption } from '../../utils/constants';

export interface RadioGroupProps {
  name: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  options: SelectOption[];
  required?: boolean;
  className?: string;
}

export const RadioGroup = memo(function RadioGroup({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options = [],
  required = false,
  className = '',
}: RadioGroupProps) {
  const hasError = Boolean(touched && error);

  return (
    <div className={`flex flex-col gap-2 w-full text-left ${className}`}>
      {label && (
        <span className="text-sm font-semibold text-text-primary flex items-center gap-1">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      )}

      <div className="flex flex-wrap gap-4 items-center" role="radiogroup" aria-label={label}>
        {options.map((opt) => {
          const optId = `${name}-${opt.value}`;
          const isChecked = value === opt.value;

          return (
            <label key={opt.value} htmlFor={optId} className="inline-flex items-center gap-2 cursor-pointer text-sm text-text-primary select-none">
              <input
                type="radio"
                id={optId}
                name={name}
                value={opt.value}
                checked={isChecked}
                onChange={onChange}
                onBlur={onBlur}
                className="w-4.5 h-4.5 accent-primary cursor-pointer border-border-medium focus:ring-primary/20"
              />
              <span className="font-medium">{opt.label}</span>
            </label>
          );
        })}
      </div>

      {hasError && (
        <p className="text-xs text-error mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default RadioGroup;
