import { Button as ReactAriaButton } from 'react-aria-components';
import type { ButtonProps as ReactAriaButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

export interface ButtonProps extends ReactAriaButtonProps {
  color?: 'primary' | 'secondary';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const buttonStyles = tv({
  base: 'cursor-pointer font-body rounded-md transition',
  variants: {
    color: {
      primary:
        'bg-gray-950 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-950',
      secondary:
        'bg-transparent border-2 border-solid border-gray-950 hover:border-gray-800 dark:border-white dark:hover:border-gray-200 text-gray-950 hover:text-gray-700 dark:text-white dark:hover:text-gray-200',
    },
    size: {
      xs: 'h-6 px-1.5 py-1 text-xs',
      sm: 'h-8 px-2.5 py-1.5 text-sm',
      md: 'h-10 px-3 py-2 text-base',
      lg: 'h-12 px-4 py-2.5 text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

/**
 * Allows a user to perform an action, with mouse, touch, and keyboard interactions
 *
 * @example
 * ```tsx
 * <Button onPress={someFunc}>
 *   I'm a button!
 * </Button>
 * ```
 */
export function Button({ color, size, ...reactAriaButtonProps }: ButtonProps) {
  return <ReactAriaButton {...reactAriaButtonProps} className={buttonStyles({ color, size })} />;
}
