import { css } from 'styled-components';
import { SOFT_BLACK, SOFT_WHITE, THEME_NAVY, WHITE } from '../color';
import { NAVIGATION_BAR_Z_INDEX } from '../z-index';

export const NAVIGATION_BAR_STYLE = css`
  background-color: ${WHITE};
  display: flex;
  z-index: ${NAVIGATION_BAR_Z_INDEX};

  @media (prefers-color-scheme: dark) {
    background-color: ${SOFT_BLACK};
    color: ${SOFT_WHITE};
  }
`;

export const NAVIGATION_BAR_CONTENT_STYLE = css`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NAVIGATION_MENU_LIST_STYLE = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NAVIGATION_MENU_LINK_STYLE = css`
  color: ${THEME_NAVY};
  cursor: pointer;
  display: block;
  letter-spacing: 0.25px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${THEME_NAVY};
  }

  @media (prefers-color-scheme: dark) {
    color: ${SOFT_WHITE};

    &:hover,
    &:focus {
      color: ${SOFT_WHITE};
    }
  }
`;

export const NAVIGATION_BAR_WORDMARK_LINK_STYLE = css`
  padding: 16px;
`;
