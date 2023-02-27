import { AriaAttributes, DOMAttributes } from 'react';

/**
 * Todo: Remove once the resolution for
 * {@link https://github.com/facebook/react/issues/25682} lands.
 */
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
