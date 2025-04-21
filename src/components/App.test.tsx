import App from './App';
import { describe, expect, test } from 'vitest';
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
  test('logo selection can rotate theme', async () => {
    const { getByAltText } = render(<App />);

    const originalDocumentStyle = getDocumentStyle();
    await userEvent.click(getByAltText('Jerrypop logo'));

    expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);
  });
});
