import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}

const controlClass =
  "w-full bg-brand-card border border-brand-border-dark rounded-[var(--radius-control)] px-4 py-3 text-base text-brand-text placeholder:text-brand-text-muted hover:border-brand-accent-light focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent disabled:bg-brand-surface disabled:cursor-not-allowed transition-colors";

const FieldLabel = ({ id, label, required }: { id: string; label: string; required?: boolean }) => (
  <label htmlFor={id} className="block text-sm font-medium text-brand-primary mb-2">
    {label}{' '}
    {required && (
      <>
        <span className="text-brand-accent" aria-hidden="true">*</span>
        <span className="sr-only">(required)</span>
      </>
    )}
  </label>
);

interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof FormFieldProps>, FormFieldProps {}

export const FormInput: React.FC<FormInputProps> = ({ id, name, label, required, className = '', ...props }) => (
  <div className={className}>
    <FieldLabel id={id} label={label} required={required} />
    <input id={id} name={name} required={required} className={controlClass} {...props} />
  </div>
);

interface FormTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof FormFieldProps>, FormFieldProps {}

export const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, label, required, className = '', ...props }) => (
  <div className={className}>
    <FieldLabel id={id} label={label} required={required} />
    <textarea id={id} name={name} required={required} className={`${controlClass} resize-y min-h-28`} {...props} />
  </div>
);

interface FormSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof FormFieldProps>, FormFieldProps {
  children: React.ReactNode;
}

export const FormSelect: React.FC<FormSelectProps> = ({ id, name, label, required, className = '', children, ...props }) => (
  <div className={className}>
    <FieldLabel id={id} label={label} required={required} />
    <select id={id} name={name} required={required} className={controlClass} {...props}>
      {children}
    </select>
  </div>
);

/** Success / error feedback shown after a form submission. */
export const FormAlert = ({ type, children }: { type: 'success' | 'error'; children: React.ReactNode }) => (
  <div
    role={type === 'error' ? 'alert' : 'status'}
    className={`rounded-[var(--radius-control)] border px-4 py-3 text-sm ${
      type === 'error'
        ? 'bg-brand-danger-soft border-brand-danger/30 text-brand-danger'
        : 'bg-brand-success-soft border-brand-success/30 text-brand-success'
    }`}
  >
    {children}
  </div>
);
