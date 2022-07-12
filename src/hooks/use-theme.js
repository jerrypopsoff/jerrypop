import { useEffect, useState } from 'react';
import { THEMES } from '../constants/theme';

let currentThemeIndex = 0;

export function useTheme() {
  const [theme, setTheme] = useState(THEMES[currentThemeIndex]);

  const incrementTheme = () => {
    ++currentThemeIndex;
    setTheme(THEMES[currentThemeIndex % THEMES.length]);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'style',
      `--main-theme-dark: ${theme.mainThemeDark};
       --main-theme-medium: ${theme.mainThemeMedium};
       --text-highlight: ${theme.textHighlight};
    `,
    );
  }, [theme]);

  return [theme, incrementTheme];
}
