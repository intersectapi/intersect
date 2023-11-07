import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { describe, expect, it, jest } from 'bun:test';

import { Button } from './Button';

describe('button', () => {
  const user = userEvent.setup()
  it('should execute a function when clicked', async () => {
    const onPress = jest.fn();

    render(<Button onPress={onPress}>Test Button</Button>);
    await user.click(screen.getByRole('button', {name: "Test Button"}))
    
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
