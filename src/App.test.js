import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders website heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Poppin’ off with Jerry/i);
  expect(headingElement).toBeInTheDocument();
});
