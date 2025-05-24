import { css } from 'styled-components';

export const DANGLE_STYLE = css`
  animation: dangle 0.25s infinite linear;

  @keyframes dangle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-1deg);
    }
    75% {
      transform: rotate(1deg);
    }
  }
`;
