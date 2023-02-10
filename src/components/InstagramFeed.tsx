import React from 'react';
import styled from 'styled-components';
import useScript from '../hooks/use-script';

const StyledInstagramFeed = styled.div`
  margin: 36px 0 0;
  width: 95%;
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
