import { css } from 'styled-components';
import {
  BLACK,
  GRAYSCALE_DARK,
  GRAYSCALE_MEDIUM,
  THEME_NAVY,
  WHITE,
} from '../color';
import { withBoxShadow } from './shadow';

export const CARD_OUTER_STYLE = css`
  ${withBoxShadow}
  background-color: ${WHITE};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${BLACK};
  margin: 12px auto;
  padding: 8px;
  text-align: left;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }
`;

export const CARD_INNER_STYLE = css`
  border: 2px solid ${THEME_NAVY};
  border-radius: 5px;
  padding: 20px;

  a {
    color: ${GRAYSCALE_DARK};

    &:hover,
    &:focus {
      color: ${GRAYSCALE_MEDIUM};
    }
  }
`;
