import { useEffect, useState } from 'react';
import { THEMES } from '../constants/theme';
import { getRandomInteger } from '../utilities/random';

let currentThemeIndex = getRandomInteger(0, THEMES.length - 1);

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
