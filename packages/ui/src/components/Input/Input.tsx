import { TextField, Label, Input as ReactAriaInput, ValidationResult } from 'react-aria-components';
import { TextFieldProps as ReactAriaTextFieldProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

export interface TextFieldProps extends ReactAriaTextFieldProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export const inputStyles = tv({
  slots: {
    textField: 'text-red-50',
    label: 'text-blue-200',
    input: 'font-light text-gray-400 bg-gray-100',
  },
  variants: {
    size: {
      xs: {
        label: 'text-xs',
        input: 'h-6	px-2 text-xs rounded-sm',
      },
      sm: {
        label: 'text-sm',
        input: 'h-8	px-3 py-1.5 text-sm rounded',
      },
      md: {
        label: 'text-base',
        input: 'h-10 px-4 py-2.5 text-base rounded',
      },
      lg: {
        label: 'text-lg',
        input: 'h-12 px-4 py-3 text-lg rounded-md',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export function Input({
  size,
  label,
  description,
  errorMessage,
  ...ReactAriaTextFieldProps
}: TextFieldProps) {
  const styles = inputStyles({ size: size });
  return (
    <TextField className={styles.textField()} {...ReactAriaTextFieldProps}>
      <Label className={styles.label()}>{label}</Label>
      <ReactAriaInput className={styles.input()} placeholder="Placeholder" />
    </TextField>
  );
}
