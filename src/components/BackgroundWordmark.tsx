import React from 'react';
import { WORDMARK_Z_INDEX } from '../constants/z-index';
import WordmarkImage from './WordmarkImage';
import styled from 'styled-components';

const StyledWordmark = styled.div<{ isFixed: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 314px 0;
  opacity: ${({ isFixed }) => (isFixed ? '0.1' : '1.0')};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  right: 0;
  top: 0;
  z-index: ${WORDMARK_Z_INDEX};
`;

interface Props {
  fillColor: string;
  isFixed?: boolean;
  repeat?: number;
}

const BackgroundWordmark: React.FC<Props> = ({
  fillColor,
  isFixed = false,
  repeat = 3,
}) => {
  return (
    <StyledWordmark aria-hidden="true" isFixed={isFixed}>
      {Array.from({ length: repeat }).map((e, index) => (
        <div key={index}>
          <WordmarkImage fillColor={fillColor} />
        </div>
      ))}
    </StyledWordmark>
  );
};

export default BackgroundWordmark;
