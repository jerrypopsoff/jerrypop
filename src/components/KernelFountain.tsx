import { getRandomBoolean, getRandomInteger } from '../utilities/random';
import Kernel from './Kernel';
import React from 'react';
import styled from 'styled-components';

const StyledKernelFountain = styled.div`
  position: fixed;
  left: 0;
  overflow: visible;
  top: 0;
`;

interface Props {
  delay: number;
  duration: number;
  id: string;
  kernelCount: number;
  left: number;
  top: number;
}

const KernelFountain: React.FC<Props> = ({
  delay,
  duration,
  id,
  kernelCount,
  left,
  top,
}) => {
  return (
    <StyledKernelFountain aria-hidden="true">
      {Array(kernelCount)
        .fill(null)
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
};

export default KernelFountain;
