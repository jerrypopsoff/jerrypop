import React from 'react';
import { HOME_WORDMARK_Z_INDEX } from '../constants/z-index';
import WordmarkImage from './WordmarkImage';
import styled from 'styled-components';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const StyledWordmark = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 150px;
  z-index: ${HOME_WORDMARK_Z_INDEX};

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    top: 117px;
  }
`;

interface Props {
  fillColor: string;
  repeat?: number;
}

const BackgroundWordmark: React.FC<Props> = ({ fillColor, repeat = 3 }) => {
  return (
    <StyledWordmark aria-hidden="true">
      {Array.from({ length: repeat }).map((e, index) => (
        <div key={index}>
          <WordmarkImage fillColor={fillColor} />
        </div>
      ))}
    </StyledWordmark>
  );
};

export default BackgroundWordmark;
