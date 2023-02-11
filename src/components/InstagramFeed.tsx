import React from 'react';
import styled from 'styled-components';
import useScript from '../hooks/use-script';

const StyledInstagramFeed = styled.div`
  box-sizing: border-box;
  margin: 36px 0 0;
  padding: 0 12px;
  width: 100%;
`;

let hasInitialized = false;

/**
 * Via {@link https://behold.so/}.
 */
const InstagramFeed: React.FC = () => {
  useScript('https://w.behold.so/widget.js', 'module');

  /**
   * Re-initialize Behold widgets if this component has already been rendered
   * during this session.
   */
  if (
    hasInitialized &&
    typeof window.beholdWidgets?.initialize === 'function'
  ) {
    window.beholdWidgets.initialize();
  }
  hasInitialized = true;

  return (
    <StyledInstagramFeed>
      <figure data-behold-id="NSjKjOSPqqepSaQCu4gZ"></figure>
    </StyledInstagramFeed>
  );
};

export default InstagramFeed;
