import '../styles/Kernel.scss';
import React from 'react';
import { animateKernel } from '../utilities/Kernel';
import { getRandomInteger } from '../utilities/Random';
import kernel from '../images/Kernel.png';

export default function Kernel({ delay, id, isRotatingClockwise, left, top }) {
  const style = { display: 'none', left: `${left}px`, top: `${top}px` };

  setTimeout(() => animateKernel(id, top), delay);

  return (
    <img
      alt="Popcorn kernel"
      aria-hidden="true"
      className={isRotatingClockwise ? 'Kernel' : 'Kernel Kernel--reverse'}
      id={id}
      src={kernel}
      style={style}
      x-velocity={getRandomInteger(-15, 15)}
      y-velocity={getRandomInteger(-20, -10)}
    />
  );
}
