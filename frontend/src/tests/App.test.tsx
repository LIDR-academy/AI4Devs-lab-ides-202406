import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Sistema de Seguimiento de Talento/i);
  expect(linkElement).toBeInTheDocument();
});