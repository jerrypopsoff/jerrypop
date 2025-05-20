import { useCallback, useEffect, useState } from 'react';
import { THEMES } from '../constants/theme';
import type { Theme } from '../types/theme';

let currentThemeIndex = 0;

export function useJerrypopTheme(): [Theme, () => void] {
  const [jerrypopTheme, setJerrypopTheme] = useState(THEMES[currentThemeIndex]);

  /**
   * `useCallback` prevents infinite re-render via the `useEffect` in the
   * `RotateTheme` component.
   */
  const incrementJerrypopTheme = useCallback(() => {
    ++currentThemeIndex;
    if (currentThemeIndex >= THEMES.length) {
      currentThemeIndex = 0;
    }

    setJerrypopTheme(THEMES[currentThemeIndex]);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'style',
      `--main-theme-dark: ${jerrypopTheme.mainThemeDark};
       --main-theme-medium: ${jerrypopTheme.mainThemeMedium};
       --theme-text-on-medium: ${jerrypopTheme.mainThemeTextOnMedium};
    `,
    );
  }, [jerrypopTheme]);

  return [jerrypopTheme, incrementJerrypopTheme];
}
