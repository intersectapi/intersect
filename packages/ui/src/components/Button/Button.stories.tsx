import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  args: {
    children: 'Button',
  },
  argTypes: {
    onPress: {
      action: 'onPress',
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Forms/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
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
