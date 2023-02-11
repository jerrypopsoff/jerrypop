import React, { useRef } from 'react';
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
  const beholdFigureRef = useRef<HTMLElement>(null);

  /**
   * Reinitialize Behold widgets if the Behold figure element has no children.
   * This happens when users change route to a page containing this component
   * after the Behold widgets have already been initialized in the current
   * session.
   */
  if (
    beholdFigureRef.current?.childElementCount === 0 &&
    typeof window.beholdWidgets?.initialize === 'function'
  ) {
    window.beholdWidgets.initialize();
  }

  return (
    <StyledInstagramFeed>
      <figure
        data-behold-id="NSjKjOSPqqepSaQCu4gZ"
        ref={beholdFigureRef}
      ></figure>
    </StyledInstagramFeed>
  );
};

export default InstagramFeed;
