/**
 * `jest-dom` adds custom jest matchers for asserting on DOM nodes.
 *
 * {@link https://github.com/testing-library/jest-dom}
 *
 * @example expect(element).toHaveTextContent(/react/i);
 */
import '@testing-library/jest-dom/extend-expect';

/**
 * Mock `window.scrollTo` globally to avoid console errors for invoking
 * undefined property.
 */
window.scrollTo = jest.fn();
