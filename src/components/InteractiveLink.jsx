import React from 'react';
import { StyledLink } from '../styled-components/InteractiveLink';
import UseInteraction from '../hooks/UseInteraction';

export default function InteractiveLink({
  className,
  defaultText,
  interactiveText,
  to,
}) {
  const [ref, isInteracting] = UseInteraction();

  return (
    <StyledLink className={className} to={to} ref={ref}>
      {isInteracting ? interactiveText : defaultText}
    </StyledLink>
  );
}
