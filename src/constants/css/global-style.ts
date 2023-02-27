import {
  GRAYSCALE_FILTER,
  SOFT_BLACK,
  SOFT_WHITE,
  THEME_NAVY,
  WHITE,
} from '../color';
import {
  DESKTOP_NAVIGATION_BAR_HEIGHT_PX,
  KERNEL_NARROW_SIZE_PX,
  KERNEL_WIDE_SIZE_PX,
  MOBILE_NAVIGATION_BAR_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../breakpoint';
import { POPCORN_KERNEL_Z_INDEX } from '../z-index';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GLOBAL_STYLE = createGlobalStyle`
::selection {
  background-color: var(--main-theme-medium);
  color: var(--theme-text-on-medium);
  text-shadow: none;
}

body {
  background-color: ${WHITE};
  color: ${THEME_NAVY};
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: ${DESKTOP_NAVIGATION_BAR_HEIGHT_PX}px 0 0;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    padding: ${MOBILE_NAVIGATION_BAR_HEIGHT_PX}px 0 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${SOFT_BLACK};
    color: ${SOFT_WHITE};
  }
}

:focus {
  outline-color: var(--main-theme-medium);
}

img:not([src*='.svg']) {
  filter: ${GRAYSCALE_FILTER};
}

a {
  color: ${THEME_NAVY};
  cursor: pointer;
  text-decoration: underline;

  @media (prefers-color-scheme: dark) {
    color: ${SOFT_WHITE};
  }
}

a:focus,
a:hover {
  color: ${THEME_NAVY};

  @media (prefers-color-scheme: dark) {
    color: ${SOFT_WHITE};
  }
}

button {
  font-family: inherit;
}

@keyframes kernel {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes reverse-kernel {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.popcorn-kernel {
  animation: kernel 0.5s infinite linear;
  -webkit-animation: kernel 0.5s infinite linear;
  height: ${KERNEL_WIDE_SIZE_PX}px;
  pointer-events: none;
  position: fixed;
  width: ${KERNEL_WIDE_SIZE_PX}px;
  z-index: ${POPCORN_KERNEL_Z_INDEX};
}

.popcorn-kernel--reverse {
  animation: reverse-kernel 0.5s infinite linear;
  -webkit-animation: reverse-kernel 0.5s infinite linear;
}

@media (max-width: 860px) {
  .popcorn-kernel {
    height: ${KERNEL_NARROW_SIZE_PX}px;
    width: ${KERNEL_NARROW_SIZE_PX}px;
  }
}
` as unknown as React.FC;
