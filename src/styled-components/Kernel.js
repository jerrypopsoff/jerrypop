import styled from 'styled-components';

export const StyledImage = styled.img`
  animation: ${props =>
      props.isRotatingClockwise ? 'kernel' : 'reverse-kernel'}
    0.5s infinite linear;
  height: 3vmin;
  position: absolute;

  @keyframes kernel {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes reverse-kernel {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
