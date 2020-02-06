import React from 'react';
import { animateKernel } from '../utilities/Kernel';
import { getRandomInteger } from '../utilities/Random';
import kernel from '../images/Kernel.png';
import styled from 'styled-components';

const Img = styled.img`
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

export default function Kernel({ delay, id, isRotatingClockwise, left, top }) {
  const style = { display: 'none', left: `${left}px`, top: `${top}px` };

  setTimeout(() => animateKernel(id), delay);

  return (
    <Img
      alt="Popcorn kernel"
      aria-hidden="true"
      id={id}
      isRotatingClockwise={isRotatingClockwise}
      src={kernel}
      style={style}
      data-x-velocity={getRandomInteger(-15, 15)}
      data-y-velocity={getRandomInteger(-20, -10)}
    />
  );
}
