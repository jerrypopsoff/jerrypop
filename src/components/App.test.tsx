import App from './App';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Note: state needs to be manually reset at the end of tests because these are
 * application integration tests.
 */

const getDocumentStyle = () => {
  return document.documentElement.getAttribute('style');
};

describe('theme', () => {
  test('navigation can rotate theme', async () => {
    const { getAllByRole, getByAltText } = render(<App />);

    const originalDocumentStyle = getDocumentStyle();
    const linkElements = getAllByRole('link');
    await userEvent.click(linkElements[0]);

    expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);

    // Reset router state for next test
    await userEvent.click(getByAltText('Jerrypop logo'));
  });
});
