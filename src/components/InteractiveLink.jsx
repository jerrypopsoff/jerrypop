import { Link } from 'react-router-dom';
import React from 'react';
import UseInteraction from '../hooks/UseInteraction';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: #edeeff;
  border-radius: 4px;
  color: #3e3e51;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin: 5px 0;
  padding: 12px 24px;

  &:hover,
  &:focus {
    color: #3e3e51;
  }
`;

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
