import { css } from 'styled-components';

export const PULSE_STYLE = css`
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

export const OFFSET_PULSE_STYLE = css`
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

export const LARGE_PULSE_STYLE = css`
  animation: bigPulse 2.5s infinite linear;

  @keyframes bigPulse {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.95);
    }
    75% {
      transform: scale(1.05);
    }
  }
`;
