// Reusable Formik-compatible Dropdown Component with Tailwind CSS v4 in TypeScript
import { memo, useState, useCallback } from 'react';
import type { SelectHTMLAttributes, FocusEvent } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import type { SelectOption } from '../../utils/constants';

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: SelectOption[];
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
}

export const Dropdown = memo(function Dropdown({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  className = '',
  id,
  ...rest
}: DropdownProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const selectId = id || `dropdown-${name}`;
  const hasError = Boolean(touched && error);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(
    (e: FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-semibold text-text-primary flex items-center gap-1">
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}

      <div
        className={`relative flex items-center w-full border-[1.5px] rounded-lg bg-bg-white transition-all duration-200 ${
          hasError
            ? 'border-error ring-3 ring-error/15'
            : isFocused
            ? 'border-primary ring-3 ring-primary/20'
            : 'border-border-light hover:border-border-medium'
        }`}
      >
        <select
          id={selectId}
          name={name}
          value={value ?? ''}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className="w-full pl-3.5 pr-9 py-2.5 text-sm font-sans text-text-primary bg-transparent border-none outline-none rounded-lg appearance-none cursor-pointer"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${selectId}-error` : undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3.5 pointer-events-none text-text-muted flex items-center" aria-hidden="true">
          <FaChevronDown size={13} />
        </span>
      </div>

      {hasError && (
        <p id={`${selectId}-error`} className="text-xs text-error mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Dropdown;
