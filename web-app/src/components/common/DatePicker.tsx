// Reusable Formik-compatible DatePicker Component with Tailwind CSS v4 in TypeScript
import { memo, useState, useCallback } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

export interface DatePickerProps {
  name: string;
  label?: string;
  value?: Date | string | null;
  onChange: (date: Date | null) => void;
  onBlur?: (e: { target: { name: string } }) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  maxDate?: Date;
  minDate?: Date;
  className?: string;
  id?: string;
}

export const DatePicker = memo(function DatePicker({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder = 'DD/MM/YYYY',
  required = false,
  disabled = false,
  maxDate = new Date(),
  minDate,
  className = '',
  id,
}: DatePickerProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputId = id || `datepicker-${name}`;
  const hasError = Boolean(touched && error);

  const selectedDate = value ? (value instanceof Date ? value : new Date(value)) : null;
  const isValidDate = selectedDate && !isNaN(selectedDate.getTime()) ? selectedDate : null;

  const handleChange = useCallback(
    (date: Date | null) => {
      if (onChange) {
        onChange(date);
      }
    },
    [onChange]
  );

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (onBlur) {
      onBlur({ target: { name } });
    }
  }, [name, onBlur]);

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-text-primary flex items-center gap-1">
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}

      <div
        className={`relative flex items-center w-full border-[1.5px] rounded-lg bg-bg-white transition-all duration-200 [&>.react-datepicker-wrapper]:w-full ${
          hasError
            ? 'border-error ring-3 ring-error/15'
            : isFocused
            ? 'border-primary ring-3 ring-primary/20'
            : 'border-border-light hover:border-border-medium'
        }`}
      >
        <span className="absolute left-3.5 pointer-events-none text-text-muted flex items-center z-10" aria-hidden="true">
          <FaCalendarAlt size={14} />
        </span>

        <ReactDatePicker
          id={inputId}
          name={name}
          selected={isValidDate}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholderText={placeholder}
          dateFormat="dd/MM/yyyy"
          maxDate={maxDate}
          minDate={minDate}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          className="w-full pl-10 pr-3.5 py-2.5 text-sm font-sans text-text-primary bg-transparent border-none outline-none rounded-lg cursor-pointer"
          autoComplete="off"
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      </div>

      {hasError && (
        <p id={`${inputId}-error`} className="text-xs text-error mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default DatePicker;
