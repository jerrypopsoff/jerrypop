import App from './App';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

test('heading is rendered appropriately', () => {
  const { getByRole } = render(<App />);

  const heading = getByRole('heading');

  expect(heading).toHaveTextContent('React Playground');
});

// await userEvent.click(getByAltText('Jerrypop logo'));
