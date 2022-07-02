let CURRENT_THEME_INDEX;

const THEMES = [
  {
    // Purple & neon green
    mainThemeDark: '#835dd0',
    mainThemeMedium: '#97d700',
    textHighlight: '#000',
  },
  {
    // Yellow-orange & hot pink
    mainThemeDark: '#f2a900',
    mainThemeMedium: '#e93ab8',
    textHighlight: '--main-theme-light',
  },
  {
    // Green & yellow
    mainThemeDark: '#00b140',
    mainThemeMedium: '#f7ea48',
    textHighlight: '#000',
  },
  {
    // Blue & hot pink
    mainThemeDark: '#0072da',
    mainThemeMedium: '#e93ab8',
    textHighlight: '--main-theme-light',
  },
  {
    // Hot pink & purple
    mainThemeDark: '#e93ab8',
    mainThemeMedium: '#835dd0',
    textHighlight: '--main-theme-light',
  },
  {
    // Cyan & yellow
    mainThemeDark: '#2dccd3',
    mainThemeMedium: '#f7ea48',
    textHighlight: '#000',
  },
  // {
  //   mainThemeDark: '#0072da',
  //   mainThemeMedium: '#2dccd3',
  //   textHighlight: '--main-theme-light',
  // },
  // {
  //   mainThemeDark: '#9678d3',
  //   mainThemeMedium: '#2dccd3',
  //   textHighlight: '--main-theme-light',
  // },
];

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
