// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import { App } from './App';
import { renderTestApp } from './tests/helpers/renderTestApp';

// import App from './App';

// describe('test App component', () => {
//   test('render apps elements', () => {
//     render(<App />);
//     const helloElem = screen.getByText(/hello/i);
//     const btn = screen.getByRole('button');
//     const input = screen.getByPlaceholderText(/input./i);
//     expect(helloElem).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//     expect(input).toMatchSnapshot();
//   });

//   test('testing smthng in app component', () => {
//     render(<App />);
//     const hello = screen.queryByText(/hello2/i);
//     expect(hello).toBeNull();
//   });

//   test('async data', async () => {
//     render(<App />);
//     const data = await screen.findByText(/data/i);
//     expect(data).toBeInTheDocument();
//     expect(data).toHaveAttribute('style', 'color: red;');
//     expect(data).toHaveClass('active');
//   });

//   test('toggle button', () => {
//     render(<App />);
//     const button = screen.getByTestId('toggleBtn');
//     expect(screen.queryByTestId('toggleDiv')).toBeNull();
//     expect(button).toBeInTheDocument();
//     fireEvent.click(button);
//     expect(screen.getByTestId('toggleDiv')).toBeInTheDocument();
//   });

//   test('input', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/input./i);
//     expect(screen.getByTestId('value-elem')).toContainHTML('');
//     fireEvent.input(input, {
//       target: { value: '123123' },
//     });
//     expect(screen.getByTestId('value-elem')).toHaveTextContent('123123');
//     userEvent.type(input, '12311');
//     expect(screen.getByTestId('value-elem')).toHaveTextContent('12311');
//   });
// });

describe('app', () => {
  test('appLink', () => {
    renderTestApp(<App />);
    const mainLink = screen.getByTestId('main-link');
    expect(mainLink).toBeInTheDocument();
  });
});
