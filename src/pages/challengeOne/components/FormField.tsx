import type { ChangeEvent } from 'react';
import type { Field } from '../data';
import clsx from 'clsx';

export const FormField = ({
  field,
  disabled,
  onChange,
  value,
}: {
  field: Field;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={field.id}
        className={clsx(
          'block text-sm font-medium',
          field.required &&
            `after:content-['*'] ${disabled ? 'after:text-gray-400' : 'after:text-gray-800'} after:ml-1`,
          disabled ? 'text-gray-400' : 'text-gray-800'
        )}
      >
        {field.label}
      </label>

      {field.type === 'select' ? (
        <select
          id={field.id}
          name={field.id}
          className={`form-select w-full ${disabled ? 'bg-gray-100 text-gray-400' : 'bg-white'}`}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        >
          <option value="">Bitte auswählen</option>
          {field.options?.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          id={field.id}
          name={field.id}
          className={`form-input w-full ${disabled ? 'bg-gray-100 text-gray-400' : 'bg-white'}`}
          placeholder={field.placeholder}
          rows={3}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          className={`form-input w-full ${disabled ? 'bg-gray-100 text-gray-400' : 'bg-white'}`}
          placeholder={field.placeholder}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
