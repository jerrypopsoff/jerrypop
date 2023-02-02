import { css } from 'styled-components';
import { BLACK, GRAYSCALE_DARK, GRAYSCALE_MEDIUM, WHITE } from '../color';
import { withBoxShadow } from './shadow';

export const CARD_STYLE = css`
  ${withBoxShadow}
  background-color: ${WHITE};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${BLACK};
  margin: 12px auto;
  padding: 20px;
  text-align: left;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }

  a {
    color: ${GRAYSCALE_DARK};

    &:hover,
    &:focus {
      color: ${GRAYSCALE_MEDIUM};
    }
  }
`;
