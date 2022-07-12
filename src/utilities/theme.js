import { THEMES } from '../constants/theme';

let currentThemeIndex = 0;

export function getCurrentTheme() {
  return THEMES[currentThemeIndex % THEMES.length];
}

export function toggleTheme() {
  ++currentThemeIndex;
}
