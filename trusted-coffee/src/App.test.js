import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My React App/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/This is my first React app/i);
  expect(descriptionElement).toBeInTheDocument();
});
