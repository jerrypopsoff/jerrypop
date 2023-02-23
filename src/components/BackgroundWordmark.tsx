import React from 'react';
import { WORDMARK_Z_INDEX } from '../constants/z-index';
import WordmarkImage from './WordmarkImage';
import styled from 'styled-components';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const StyledWordmark = styled.div<{ isFixed: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  opacity: ${({ isFixed }) => (isFixed ? '0.05' : '1.0')};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  right: 0;
  top: 150px;
  z-index: ${WORDMARK_Z_INDEX};

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    top: 117px;
  }
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
