import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Navbar } from './components/Navbar/Navbar';
import { renderTestApp } from './tests/helpers/renderTestApp';
import { renderWithRouter } from './tests/helpers/renderWithRouter';

describe('test router', () => {
  test('routes', () => {
    renderTestApp(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toContainHTML('AboutPage');
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Error page', () => {
    renderWithRouter(null, '/asdsa');
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
