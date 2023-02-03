import { css } from 'styled-components';

export const SLOW_DANGLE_STYLE = css`
  animation: slowDangle 3s infinite ease-in-out;

  @keyframes slowDangle {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }
`;

export const DANGLE_STYLE = css`
  animation: dangle 0.25s infinite linear;

  @keyframes dangle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-0.5deg);
    }
    75% {
      transform: rotate(0.5deg);
    }
  }
`;
