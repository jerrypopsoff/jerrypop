import { THEME_NAVY, WHITE } from '../color';
import { css } from 'styled-components';
import { WITH_BOX_SHADOW_STYLE } from './shadow';

export const BUTTON_STYLE = css`
  ${WITH_BOX_SHADOW_STYLE}
  align-items: center;
  background-color: ${WHITE};
  border: none;
  border-radius: 4px;
  color: ${THEME_NAVY};
  cursor: pointer;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.25px;
  margin: 8px;
  min-width: 192px;
  padding: 24px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${THEME_NAVY};
  }
`;
