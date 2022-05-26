import React from 'react';
import { animateKernel } from '../utilities/Kernel';
import { getRandomInteger } from '../utilities/Random';
import kernel from '../images/kernel-with-border.svg';

export default function Kernel({ delay, id, isRotatingClockwise, left, top }) {
  const className = isRotatingClockwise
    ? 'popcorn-kernel'
    : 'popcorn-kernel popcorn-kernel--reverse';
  const style = { display: 'none', left: `${left}px`, top: `${top}px` };

  setTimeout(() => animateKernel(id), delay);

  return (
    <img
      alt="Popcorn kernel"
      aria-hidden="true"
      className={className}
      id={id}
      src={kernel}
      style={style}
      data-x-velocity={getRandomInteger(-15, 15)}
      data-y-velocity={getRandomInteger(-20, -10)}
    />
  );
}
