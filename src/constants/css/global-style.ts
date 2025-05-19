'use client';

import {
  ICON_HOVER_BACKGROUND,
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
import { createGlobalStyle } from 'styled-components';
import { FC } from 'react';
import { THEMES } from '../theme';

export const GLOBAL_STYLE = createGlobalStyle`
:root {
  --color-background: ${WHITE};
  --color-foreground: ${THEME_NAVY};
  --color-theme-background: var(--main-theme-dark);
  --icon-hover-background: ${ICON_HOVER_BACKGROUND};
  --image-filter: none;
  --main-theme-dark: ${THEMES[0].mainThemeDark};
  --main-theme-medium: ${THEMES[0].mainThemeMedium};
  --theme-text-on-dark: ${THEMES[0].mainThemeTextOnDark};
  --theme-text-on-medium: ${THEMES[0].mainThemeTextOnMedium};
}

[data-theme="dark"] {
  --color-background: ${SOFT_BLACK};
  --color-foreground: ${SOFT_WHITE};
  --color-theme-background: ${THEME_NAVY};
  --icon-hover-background: rgba(250, 250, 250, 0.1);
  --image-filter: grayscale(0.15);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.25;
  margin: 0;
  padding: ${DESKTOP_NAVIGATION_BAR_HEIGHT_PX}px 0 0;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    padding: ${MOBILE_NAVIGATION_BAR_HEIGHT_PX}px 0 0;
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
` as unknown as FC;
