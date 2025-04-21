/**
 * TypeScript type augmentation for React's <img> element to support the
 * 'fetchpriority' attribute, which is now part of the HTML spec but not yet
 * included in React's type definitions as of React 18.
 *
 * This allows usage of the 'fetchpriority' attribute on <img> elements
 * without TypeScript errors.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority
 */
declare module 'react' {
  interface ImgHTMLAttributes {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
