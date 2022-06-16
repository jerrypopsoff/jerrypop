import { css } from 'styled-components';

export const lazyDangleRotation = css`
  animation: lazyDangle 3s infinite ease-in-out;

  @keyframes lazyDangle {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }
`;

