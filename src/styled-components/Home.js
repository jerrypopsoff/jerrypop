import styled from 'styled-components';

export const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledLogo = styled.img`
  animation: rotation 3s infinite ease-in-out;
  height: 40vmin;
  margin: 48px 12px 24px;
  pointer-events: none;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @keyframes rotation {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }
`;
