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
    input: 'text-black',
  },
  variants: {
    size: {
      xs: {
        label: 'text-xs',
        input: 'text-xs rounded-sm',
      },
      sm: {
        label: 'text-sm',
        input: 'text-sm rounded',
      },
      md: {
        label: 'text-base',
        input: 'text-base rounded',
      },
      lg: {
        label: 'text-lg',
        input: 'text-lg rounded-md',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
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
      <ReactAriaInput className={styles.input()} />
    </TextField>
  );
}
