import React from 'react';
import { StyledImage } from '../styled-components/Kernel';
import { animateKernel } from '../utilities/Kernel';
import { getRandomInteger } from '../utilities/Random';
import kernel from '../images/Kernel.png';

export default function Kernel({ delay, id, isRotatingClockwise, left, top }) {
  const style = { display: 'none', left: `${left}px`, top: `${top}px` };

  setTimeout(() => animateKernel(id), delay);

  return (
    <StyledImage
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
