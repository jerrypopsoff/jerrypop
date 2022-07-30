import App from './App';
import React from 'react';
import { THEMES } from '../constants/theme';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Note: state needs to be manually reset at the end of tests because these are
 * application integration tests.
 */

const getDocumentStyle = () => {
  return document.documentElement.getAttribute('style');
};

test('renders website heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Poppin’ off with Jerry/i);
  expect(headingElement).toBeInTheDocument();
});

describe('theme', () => {
  test('logo can rotate theme', async () => {
    const { getByAltText } = render(<App />);

    const originalDocumentStyle = getDocumentStyle();
    const logoElement = getByAltText('Jerrypop logo');
    await userEvent.click(logoElement);

    expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);
  });

  test('theme toggle button can rotate theme', async () => {
    const { getByRole } = render(<App />);

    const originalDocumentStyle = getDocumentStyle();
    const buttonElement = getByRole('button');
    await userEvent.click(buttonElement);

    expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);
  });

  test('navigation can rotate theme', async () => {
    const { getAllByRole, getByAltText } = render(<App />);

    const originalDocumentStyle = getDocumentStyle();
    const linkElements = getAllByRole('link');
    await userEvent.click(linkElements[0]);

    expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);

    // Reset router state for next test
    await userEvent.click(getByAltText('Jerrypop logo'));
  });

  test('theme can be rotated through full cycle', async () => {
    const { getByAltText } = render(<App />);
    const logoElement = getByAltText('Jerrypop logo');
    const themeCount = THEMES.length;

    for (let i = 0; i < themeCount + 2; ++i) {
      const originalDocumentStyle = getDocumentStyle();
      await userEvent.click(logoElement);
      expect(getDocumentStyle()).not.toEqual(originalDocumentStyle);
    }
  });
});

describe('navigation menu', () => {
  test('renders navigation menu items based on current route', async () => {
    const { getAllByRole, getByAltText } = render(<App />);

    // Home route
    let linkElements = getAllByRole('link');
    expect(linkElements.length).toEqual(5);
    expect(linkElements[0]).toHaveTextContent('Purchase');
    expect(linkElements[1]).toHaveTextContent('Recipes');

    // Purchase route
    await userEvent.click(linkElements[0]);

    linkElements = getAllByRole('link');
    expect(linkElements.length).toEqual(8);
    expect(linkElements[0]).toHaveTextContent('');
    expect(linkElements[1]).toHaveTextContent('info@jerrypop.com');
    expect(linkElements[2]).toHaveTextContent('info@jerrypop.com');
    expect(linkElements[3]).toHaveTextContent('Home');
    expect(linkElements[4]).toHaveTextContent('Recipes');

    // Recipes route
    await userEvent.click(linkElements[4]);

    linkElements = getAllByRole('link');
    expect(linkElements.length).toEqual(6);
    expect(linkElements[0]).toHaveTextContent('');
    expect(linkElements[1]).toHaveTextContent('Home');
    expect(linkElements[2]).toHaveTextContent('Purchase');

    // Reset router state for next test
    await userEvent.click(getByAltText('Jerrypop logo'));
  });
});
