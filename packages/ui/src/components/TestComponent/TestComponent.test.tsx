import { describe, it } from 'bun:test';
import { render, screen } from '@testing-library/react';

import { TestComponent } from './TestComponent';

describe('TestComponent', () => {
  it('should return "Hello, World!" by default', () => {
    render(<TestComponent />);
    screen.getByText('Hello, World!');
  });

  it('should return "Hello, James!" when "James" is provided to name', () => {
    render(<TestComponent name="James" />);
    screen.getByText('Hello, James!');
  });
});
