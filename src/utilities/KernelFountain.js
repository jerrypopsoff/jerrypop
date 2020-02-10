import { vmin } from './Screen';

const LOGO_TOP_MARGIN = 48;

export function getFountainLeft({ innerHeight, innerWidth }) {
  return innerWidth / 2 - vmin(3.5, innerHeight, innerWidth) / 2;
}

export function getFountainTop({ innerHeight, innerWidth }) {
  return LOGO_TOP_MARGIN + 0.65 * vmin(40, innerHeight, innerWidth);
}
