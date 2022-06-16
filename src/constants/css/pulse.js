import { css } from 'styled-components';

export const pulse = css`
  animation: pulse 3s infinite linear;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.98);
    }
    75% {
      transform: scale(1.02);
    }
  }
`;

export const offsetPulse = css`
  animation: offsetPulse 3s infinite linear;

  @keyframes offsetPulse {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.02);
    }
    75% {
      transform: scale(0.98);
    }
  }
`;
