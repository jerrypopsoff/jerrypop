import {
  BLACK,
  THEME_BLUE,
  THEME_CYAN,
  THEME_GREEN,
  THEME_LIGHT_GREEN,
  THEME_ORANGE,
  THEME_PINK,
  THEME_PURPLE,
  THEME_YELLOW,
  WHITE,
} from './color';

export const THEME = {
  // PB&J
  BLUE_PINK: {
    mainThemeDark: THEME_BLUE,
    mainThemeMedium: THEME_PINK,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: WHITE,
  },
  // ?
  PINK_PURPLE: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_PURPLE,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: WHITE,
  },
  // Habanero Ranch
  CYAN_YELLOW: {
    mainThemeDark: THEME_CYAN,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: BLACK,
  },
  // ?
  PURPLE_GREEN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_LIGHT_GREEN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Pad Thai?
  ORANGE_PINK: {
    mainThemeDark: THEME_ORANGE,
    mainThemeMedium: THEME_PINK,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: WHITE,
  },
  // Rosemary Lemon Pepper
  GREEN_YELLOW: {
    mainThemeDark: THEME_GREEN,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  BLUE_CYAN: {
    mainThemeDark: THEME_BLUE,
    mainThemeMedium: THEME_CYAN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  PURPLE_CYAN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_CYAN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  PINK_YELLOW: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
};

/**
 * Ordered to ensure each rotation introduces two new colors.
 */
export const THEMES = [
  THEME.BLUE_PINK,
  THEME.PURPLE_GREEN,
  THEME.ORANGE_PINK,
  THEME.CYAN_YELLOW,
  THEME.PINK_PURPLE,
  THEME.GREEN_YELLOW,
  THEME.BLUE_CYAN,
  THEME.PINK_YELLOW,
  THEME.PURPLE_CYAN,
];
