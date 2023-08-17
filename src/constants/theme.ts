import {
  BLACK,
  THEME_BLUE,
  THEME_CYAN,
  THEME_GREEN,
  THEME_LIGHT_GREEN,
  THEME_ORANGE,
  THEME_PINK,
  THEME_PURPLE,
  THEME_RED,
  THEME_YELLOW,
  WHITE,
} from './color';
import type { Theme } from '../types/theme';

interface Themes {
  [themeName: string]: Theme;
}

export const THEME: Themes = {
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
];
