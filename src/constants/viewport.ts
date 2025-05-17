import { Viewport } from 'next';
import { SOFT_BLACK, WHITE } from '../constants/color';

export const VIEWPORT: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: WHITE },
    { media: '(prefers-color-scheme: dark)', color: SOFT_BLACK },
  ],
};
