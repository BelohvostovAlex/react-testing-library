import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter component', () => {
  test('increment', async () => {
    renderTestApp(null);
    const incrementBtn = screen.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('count-title')).toHaveTextContent('1');
  });
});
