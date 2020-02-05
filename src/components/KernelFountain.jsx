import '../styles/KernelFountain.scss';
import Kernel from './Kernel';
import React from 'react';
import { getRandomInteger } from '../utilities/Random';

export default function KernelFountain({
  delay,
  duration,
  id,
  kernelCount,
  left,
  top,
}) {
  return (
    <div aria-hidden="true" className="Kernel-fountain">
      {Array(kernelCount)
        .fill()
        .map((e, i) => (
          <Kernel
            delay={getRandomInteger(delay, delay + duration)}
            id={`${id}-kernel-${i}`}
            isRotatingClockwise={Boolean(getRandomInteger(0, 1))}
            key={i}
            left={left}
            top={top}
          />
        ))}
    </div>
  );
}
