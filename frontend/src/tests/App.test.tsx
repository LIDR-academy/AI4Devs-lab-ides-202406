import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /welcome to my app/i });
  expect(headerElement).toBeInTheDocument();
});

test('button click updates counter', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(buttonElement);
  const counterElement = screen.getByText(/counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('fetches and displays data', async () => {
  render(<App />);
  const dataElement = await screen.findByText(/fetched data/i);
  expect(dataElement).toBeInTheDocument();
});