import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import InstagramFeed from './InstagramFeed';
import Logo from './Logo';
import { useTheme } from '../hooks/use-theme';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Home: React.FC = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <Logo onToggleTheme={rotateTheme} theme={theme} />
        <Typography type="h1">Poppin’ off with Jerry</Typography>
        <Typography maxWidth="600px" type="p">
          Locally handcrafted popcorn from San Francisco, California.
        </Typography>
        <InstagramFeed />
      </StyledHome>
    </>
  );
};

export default Home;
