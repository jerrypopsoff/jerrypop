'use client';

import { styled } from 'styled-components';
import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <Heading1>Ope!</Heading1>
      <Paragraph>
        Someone spilled the kernels. That page does not exist.
      </Paragraph>
    </StyledNotFound>
  );
};

export default NotFound;
