import Kernel from './Kernel';
import React from 'react';
import { StyledKernelFountain } from '../styled-components/KernelFountain';
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
    <StyledKernelFountain aria-hidden="true">
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
    </StyledKernelFountain>
  );
}
