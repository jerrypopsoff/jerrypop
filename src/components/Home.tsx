import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import InstagramFeed from './InstagramFeed';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <Typography type="h1">Poppin’ off with Jerry</Typography>
        <Typography maxWidth="600px" type="p">
          Locally handcrafted popcorn from San Francisco, California.
        </Typography>
        <NavigationMenu />
        <InstagramFeed />
      </StyledHome>
    </>
  );
};

export default Home;
