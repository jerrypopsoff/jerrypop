import { Link } from 'react-router-dom';
import React from 'react';
import { buttonStyle } from '../constants/css/button';
import styled from 'styled-components';
import useInteraction from '../hooks/use-interaction';

const StyledLink = styled(Link)`
  ${buttonStyle}

  &:hover,
  &:focus {
    color: #222;
  }
`;

export default function InteractiveLink({
  className,
  defaultText,
  interactiveText,
  to,
}) {
  const [ref, isInteracting] = useInteraction();

  return (
    <StyledLink className={className} to={to} ref={ref}>
      {isInteracting ? interactiveText : defaultText}
    </StyledLink>
  );
}
