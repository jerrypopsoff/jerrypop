import { css } from 'styled-components';
import { SOFT_WHITE, THEME_NAVY, WHITE } from '../color';

export const CARD_OUTER_STYLE = css`
  background-color: ${WHITE};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 36px auto;
  padding: 0;
  width: 500px;

  @media (max-width: 548px) {
    width: calc(100% - 24px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${THEME_NAVY};
  }
`;

export const CARD_INNER_STYLE = css`
  border-radius: 5px;
  color: ${THEME_NAVY};
  padding: 24px 16px;
  text-align: left;

  @media (prefers-color-scheme: dark) {
    color: ${SOFT_WHITE};
  }
`;

export const CARD_TITLE_STYLE = css`
  margin: 0 0 8px;
  text-align: center;
`;
