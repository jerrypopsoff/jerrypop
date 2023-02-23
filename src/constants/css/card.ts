import { css } from 'styled-components';
import { GRAYSCALE_DARK, GRAYSCALE_MEDIUM, THEME_NAVY, WHITE } from '../color';
import { WITH_BOX_SHADOW_STYLE } from './shadow';

export const CARD_OUTER_STYLE = css`
  ${WITH_BOX_SHADOW_STYLE}
  background-color: ${WHITE};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 24px auto;
  padding: 8px;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }
`;

export const CARD_INNER_STYLE = css`
  border: 2px solid ${THEME_NAVY};
  border-radius: 5px;
  color: ${THEME_NAVY};
  padding: 24px 16px;
  text-align: left;

  a {
    color: ${GRAYSCALE_DARK};

    &:hover,
    &:focus {
      color: ${GRAYSCALE_MEDIUM};
    }
  }
`;

export const CARD_TITLE_STYLE = css`
  font-size: 24px;
  margin: 0 0 4px;
  text-align: center;
`;
