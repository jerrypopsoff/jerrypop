import type { Theme } from '../types/theme';

const BLACK = 'rgb(0, 0, 0)';
const WHITE = 'rgb(255, 255, 255)';

/**
 * Pantone 285c #0072da
 */
const THEME_BLUE = 'rgb(0, 114, 218)';

/**
 * Pantone 319c #2ecddc
 */
const THEME_CYAN = 'rgb(45, 204, 211)';

/**
 * Pantone 354c #00b142
 */
const THEME_GREEN = 'rgb(0, 177, 66)';

/**
 * Pantone 375c #98d801
 */
const THEME_LIGHT_GREEN = 'rgb(151, 215, 0)';

/**
 * Pantone 130c #f2a900
 */
const THEME_ORANGE = 'rgb(242, 169, 0)';

/**
 * Pantone 232c #e93ab8
 */
const THEME_PINK = 'rgb(255, 64, 158)';

/**
 * Pantone 2088c #835dd0
 */
const THEME_PURPLE = 'rgb(131, 93, 208)';

/**
 * Pantone 192c #e40046
 */
const THEME_RED = 'rgb(250, 0, 82)';

/**
 * Pantone 101c #f7eb55
 */
const THEME_YELLOW = 'rgb(247, 234, 72)';

export const THEME: {
  [themeName: string]: Theme;
} = {
  // PB&J
  BLUE_PINK: {
    mainThemeDark: THEME_BLUE,
    mainThemeMedium: THEME_PINK,
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
  // Rosemary Lemon Pepper
  GREEN_YELLOW: {
    mainThemeDark: THEME_GREEN,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Chipotle Cheddar
  ORANGE_RED: {
    mainThemeDark: THEME_ORANGE,
    mainThemeMedium: THEME_RED,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: WHITE,
  },
  // Furikake Dashi
  PINK_PURPLE: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_PURPLE,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: WHITE,
  },
  // Sichuan Nooch
  PURPLE_CYAN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_CYAN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Chocolate Hazelnut Espresso
  PURPLE_GREEN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_LIGHT_GREEN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Málà Lime
  RED_GREEN: {
    mainThemeDark: THEME_RED,
    mainThemeMedium: THEME_LIGHT_GREEN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Goat Cheese Chive
  YELLOW_GREEN: {
    mainThemeDark: THEME_YELLOW,
    mainThemeMedium: THEME_GREEN,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: WHITE,
  },
};

/**
 * Ordered to ensure each rotation introduces two new colors.
 */
export const THEMES = [
  THEME.BLUE_PINK,
  THEME.CYAN_YELLOW,
  THEME.ORANGE_RED,
  THEME.PINK_PURPLE,
  THEME.YELLOW_GREEN,
  THEME.PURPLE_CYAN,
  THEME.RED_GREEN,
  THEME.GREEN_YELLOW,
];
