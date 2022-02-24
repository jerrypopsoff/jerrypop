import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  background-color: #edeeff;
  border-radius: 4px;
  color: #3e3e51;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin: 8px 0;
  padding: 12px 24px;

  &:hover,
  &:focus {
    color: #3e3e51;
  }
`;
