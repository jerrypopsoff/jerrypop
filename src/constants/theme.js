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
    textHighlight: WHITE,
  },
  // ?
  PINK_PURPLE: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_PURPLE,
    textHighlight: WHITE,
  },
  // Habanero Ranch
  CYAN_YELLOW: {
    mainThemeDark: THEME_CYAN,
    mainThemeMedium: THEME_YELLOW,
    textHighlight: BLACK,
  },
  // ?
  PURPLE_GREEN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_LIGHT_GREEN,
    textHighlight: BLACK,
  },
  // Pad Thai?
  ORANGE_PINK: {
    mainThemeDark: THEME_ORANGE,
    mainThemeMedium: THEME_PINK,
    textHighlight: WHITE,
  },
  // Rosemary Lemon Pepper
  GREEN_YELLOW: {
    mainThemeDark: THEME_GREEN,
    mainThemeMedium: THEME_YELLOW,
    textHighlight: BLACK,
  },
  // BLUE_CYAN: {
  //   mainThemeDark: THEME_BLUE,
  //   mainThemeMedium: THEME_CYAN,
  //   textHighlight: WHITE,
  // },
  // PURPLE_CYAN: {
  //   mainThemeDark: THEME_PURPLE,
  //   mainThemeMedium: THEME_CYAN,
  //   textHighlight: BLACK,
  // },
};

export const THEMES = [
  THEME.BLUE_PINK,
  THEME.PINK_PURPLE,
  THEME.CYAN_YELLOW,
  THEME.PURPLE_GREEN,
  THEME.ORANGE_PINK,
  THEME.GREEN_YELLOW,
];
