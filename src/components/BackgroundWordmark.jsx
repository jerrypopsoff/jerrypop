import {
  WINDOW_BREAKPOINT_WIDTH_PX,
  WORDMARK_NARROW_TOP_PX,
  WORDMARK_WIDE_TOP_PX,
} from '../constants/kernel-fountain';
import React from 'react';
import { WORDMARK_Z_INDEX } from '../constants/z-index';
import WordmarkImage from './WordmarkImage';
import styled from 'styled-components';

const StyledWordmark = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  opacity: ${({ isFixed }) => (isFixed ? '0.05' : '1.0')};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  right: 0;
  top: ${WORDMARK_WIDE_TOP_PX}px;
  z-index: ${WORDMARK_Z_INDEX};

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    top: ${WORDMARK_NARROW_TOP_PX}px;
  }
`;

export default function BackgroundWordmark({
  fillColor,
  isFixed = false,
  repeat = 3,
}) {
  return (
    <StyledWordmark aria-hidden="true" isFixed={isFixed}>
      {Array.from({ length: repeat }).map((e, index) => (
        <div key={index}>
          <WordmarkImage fillColor={fillColor} />
        </div>
      ))}
    </StyledWordmark>
  );
}
