import { css } from 'styled-components';

export const CARD_OUTER_STYLE = css`
  border-radius: 5px;
  box-sizing: border-box;
  margin: 36px auto;
  padding: 0;
  width: 500px;

  @media (max-width: 548px) {
    width: calc(100% - 24px);
  }
`;

export const CARD_INNER_STYLE = css`
  border-radius: 5px;
  padding: 24px 16px;
  text-align: left;
`;

export const CARD_TITLE_STYLE = css`
  margin: 0 0 8px;
  text-align: center;
`;
