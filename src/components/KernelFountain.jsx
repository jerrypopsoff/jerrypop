import { getRandomBoolean, getRandomInteger } from '../utilities/Random';
import Kernel from './Kernel';
import React from 'react';
import { StyledKernelFountain } from '../styled-components/KernelFountain';

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
            isRotatingClockwise={getRandomBoolean()}
            key={i}
            left={left}
            top={top}
          />
        ))}
    </StyledKernelFountain>
  );
}
