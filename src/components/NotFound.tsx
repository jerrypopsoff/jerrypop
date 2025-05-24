'use client';

import { styled } from 'styled-components';
import Typography from './Typography';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <Typography type="h1">Ope!</Typography>
      <Typography type="p">
        Someone spilled the kernels. That page does not exist.
      </Typography>
    </StyledNotFound>
  );
};

export default NotFound;
