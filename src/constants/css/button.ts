import { THEME_NAVY, WHITE } from '../color';
import { css } from 'styled-components';
import { WITH_BOX_SHADOW_STYLE } from './shadow';

export const BUTTON_STYLE = css`
  ${WITH_BOX_SHADOW_STYLE}
  background-color: ${WHITE};
  border: none;
  border-radius: 5px;
  color: ${THEME_NAVY};
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin: 8px;
  min-width: 230px;
  padding: 6px;

  &:hover,
  &:focus {
    color: ${THEME_NAVY};
  }
`;

export const BUTTON_INNER_STYLE = css`
  align-items: center;
  border: 2px solid ${THEME_NAVY};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 20px;
  text-transform: uppercase;
`;
