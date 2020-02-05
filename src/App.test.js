import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders air popper link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/air popper/i);
  expect(linkElement).toBeInTheDocument();
});
