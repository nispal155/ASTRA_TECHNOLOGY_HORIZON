import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}

interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof FormFieldProps>, FormFieldProps {}

export const FormInput: React.FC<FormInputProps> = ({ id, name, label, required, className = '', ...props }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-brand-primary mb-2">
      {label} {required && <span className="text-brand-accent">*</span>}
    </label>
    <input 
      id={id} 
      name={name} 
      required={required}
      className="w-full bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-colors" 
      {...props} 
    />
  </div>
);

interface FormTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof FormFieldProps>, FormFieldProps {}

export const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, label, required, className = '', ...props }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-brand-primary mb-2">
      {label} {required && <span className="text-brand-accent">*</span>}
    </label>
    <textarea 
      id={id} 
      name={name} 
      required={required}
      className="w-full bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-colors resize-none" 
      {...props} 
    />
  </div>
);

interface FormSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof FormFieldProps>, FormFieldProps {
  children: React.ReactNode;
}

export const FormSelect: React.FC<FormSelectProps> = ({ id, name, label, required, className = '', children, ...props }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-brand-primary mb-2">
      {label} {required && <span className="text-brand-accent">*</span>}
    </label>
    <select 
      id={id} 
      name={name} 
      required={required}
      className="w-full bg-brand-surface border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-colors" 
      {...props} 
    >
      {children}
    </select>
  </div>
);
