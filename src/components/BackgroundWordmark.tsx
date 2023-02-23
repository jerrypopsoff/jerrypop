import React from 'react';
import { HOME_WORDMARK_Z_INDEX } from '../constants/z-index';
import WordmarkImage from './WordmarkImage';
import styled from 'styled-components';

const StyledWordmark = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: ${HOME_WORDMARK_Z_INDEX};
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
