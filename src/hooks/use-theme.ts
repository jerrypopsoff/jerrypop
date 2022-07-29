import { useCallback, useEffect, useState } from 'react';
import { THEMES } from '../constants/theme';
import type { Theme } from '../types/theme';
import { getRandomInteger } from '../utilities/random';

let currentThemeIndex = getRandomInteger(0, THEMES.length - 1);

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState(THEMES[currentThemeIndex]);

  /**
   * `useCallback` prevents infinite re-render via the `useEffect` in the
   * `RotateTheme` component.
   */
  const incrementTheme = useCallback(() => {
    ++currentThemeIndex;
    setTheme(THEMES[currentThemeIndex % THEMES.length]);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'style',
      `--main-theme-dark: ${theme.mainThemeDark};
       --main-theme-medium: ${theme.mainThemeMedium};
       --theme-text-on-dark: ${theme.mainThemeTextOnDark};
       --theme-text-on-medium: ${theme.mainThemeTextOnMedium};
    `,
    );
  }, [theme]);

  return [theme, incrementTheme];
}
