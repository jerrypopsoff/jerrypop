import { THEMES } from '../constants/theme';

let CURRENT_THEME_INDEX;

export function toggleTheme() {
  if (typeof CURRENT_THEME_INDEX !== 'number') {
    CURRENT_THEME_INDEX = 0;
  } else {
    ++CURRENT_THEME_INDEX;
  }

  const theme = THEMES[CURRENT_THEME_INDEX % THEMES.length];
  const documentStyle = `
    --main-theme-dark: ${theme.mainThemeDark};
    --main-theme-medium: ${theme.mainThemeMedium};
    --text-highlight: ${theme.textHighlight};
  `;

  document.documentElement.setAttribute('style', documentStyle);
}
