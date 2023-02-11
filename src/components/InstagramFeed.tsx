import React from 'react';
import styled from 'styled-components';
import useScript from '../hooks/use-script';

const StyledInstagramFeed = styled.div`
  box-sizing: border-box;
  margin: 36px 0 0;
  padding: 0 12px;
  width: 100%;
`;

/**
 * Via {@link https://behold.so/}.
 */
const InstagramFeed: React.FC = () => {
  useScript('https://w.behold.so/widget.js', 'module');

  return (
    <StyledInstagramFeed>
      <figure data-behold-id="NSjKjOSPqqepSaQCu4gZ"></figure>
    </StyledInstagramFeed>
  );
};

export default InstagramFeed;
