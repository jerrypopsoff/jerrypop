import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Typography type="h1">Poppin’ off with Jerry</Typography>
      <Typography maxWidth="600px" type="p">
        Locally handcrafted popcorn from San Francisco, California.
      </Typography>
      <NavigationMenu />
    </StyledHome>
  );
};

export default Home;
