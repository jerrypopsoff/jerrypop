import { css } from 'styled-components';
import { THEME_NAVY, WHITE } from '../color';
import { WITH_BOX_SHADOW_STYLE } from './shadow';

export const NAVIGATION_BAR_STYLE = css`
  ${WITH_BOX_SHADOW_STYLE}
  background-color: ${WHITE};
  border-radius: 0 0 5px 5px;
  display: flex;
  padding: 0 6px 6px 6px;
`;

export const NAVIGATION_BAR_CONTENT_STYLE = css`
  align-items: center;
  border: 2px solid ${THEME_NAVY};
  border-radius: 0 0 5px 5px;
  border-top: none;
  display: flex;
  justify-content: center;
  width: 100%;
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
`;
