import React from 'react';
import { animateKernel } from '../utilities/kernel';
import { getRandomInteger } from '../utilities/random';
import kernel from '../images/kernel-with-border.svg';

interface Props {
  delay: number;
  id: string;
  isRotatingClockwise: boolean;
  left: number;
  top: number;
}

const Kernel: React.FC<Props> = ({
  delay,
  id,
  isRotatingClockwise,
  left,
  top,
}) => {
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
};

export default Kernel;
