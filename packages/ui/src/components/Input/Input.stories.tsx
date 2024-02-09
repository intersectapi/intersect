import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    size: 'md',
  },
};

export const Xs: Story = {
  args: {
    size: 'xs',
  },
};

export const Sm: Story = {
  args: {
    size: 'sm',
  },
};

export const Md: Story = {
  args: {
    size: 'md',
  },
};

export const Lg: Story = {
  args: {
    size: 'lg',
  },
};
