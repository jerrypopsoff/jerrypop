import Kernel from './Kernel';
import React from 'react';
import { getRandomInteger } from '../utilities/Random';
import styled from 'styled-components';

const StyledKernelFountain = styled.div`
  position: fixed;
  left: 0;
  overflow: visible;
  top: 0;
`;

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
