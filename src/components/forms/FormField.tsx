import type { ReactNode } from 'react';

export const inputClasses =
  'w-full bg-ink-raised border border-ink-line rounded-lg px-4 py-3 text-porcelain placeholder:text-mist/60 focus:border-champagne outline-none transition-colors duration-200 disabled:opacity-50';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export function Field({ id, label, required, error, hint, children, className = '' }: FieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-porcelain/90 mb-2">
        {label}
        {required && (
          <span className="text-champagne ml-1" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-mist">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-bordeaux-light font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
