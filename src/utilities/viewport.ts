import { Viewport } from 'next';
import { SOFT_BLACK, WHITE } from '../constants/color';

export function getViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: WHITE },
      { media: '(prefers-color-scheme: dark)', color: SOFT_BLACK },
    ],
  };
}
