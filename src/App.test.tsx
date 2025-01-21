import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('increments count on button click', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toHaveTextContent('count is 0');

    // Simulate user click and wait for state update
    await userEvent.click(button);

    // Assert the updated button text
    expect(button).toHaveTextContent('count is 1');
  });
});
