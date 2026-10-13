// Reusable Formik-compatible TextInput Component with Tailwind CSS v4 in TypeScript
import { memo, useState, useCallback } from 'react';
import type { InputHTMLAttributes, ReactNode, FocusEvent } from 'react';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;
  label?: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onEndIconClick?: () => void;
  helperText?: string;
}

export const TextInput = memo(function TextInput({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type = 'text',
  placeholder = '',
  required = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  onEndIconClick,
  helperText,
  className = '',
  id,
  autoComplete,
  ...rest
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputId = id || `field-${name}`;
  const hasError = Boolean(touched && error);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-text-primary flex items-center gap-1">
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
        {startIcon && (
          <span className="pl-3.5 flex items-center text-text-muted pointer-events-none">
            {startIcon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value ?? ''}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className="w-full px-3.5 py-2.5 text-sm font-sans text-text-primary bg-transparent border-none outline-none rounded-lg placeholder:text-text-light disabled:bg-bg-light disabled:cursor-not-allowed"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          {...rest}
        />

        {endIcon && (
          <button
            type="button"
            className="pr-3.5 flex items-center text-text-muted hover:text-primary cursor-pointer bg-none border-none transition-colors"
            onClick={onEndIconClick}
            tabIndex={onEndIconClick ? 0 : -1}
            aria-label="Toggle input action"
          >
            {endIcon}
          </button>
        )}
      </div>

      {hasError ? (
        <p id={`${inputId}-error`} className="text-xs text-error mt-0.5" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-text-muted mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
});

export default TextInput;
