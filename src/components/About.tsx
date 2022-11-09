import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';

const StyledAbout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Jerrypop</title>
      </Helmet>
      <StyledAbout>
        <Typography type="h1">About Jerrypop</Typography>
        <Typography maxWidth="600px" type="p">
          I quit my job in April 2022 to live out my dream of starting a
          business dedicated to producing the most satisfying craft popcorn in
          the world. Now that I’ve accomplished that goal, I have focused my
          efforts on sharing it with the lovely city of San Francisco.
        </Typography>
        <Typography maxWidth="600px" type="p">
          Although my dedication to quality is my highest priority, Jerrypop’s
          mission is twofold. The packaged foods industry is in dire need of a
          strong shift toward environmental sustainability. In addition to
          sharing delightful craft popcorn with the world, I aim to minimize my
          impact on the environment and influence others to do the same. Every
          bag of Jerrypop is sustainably handcrafted and packaged in a 100%
          compostable pouch.
        </Typography>
        <NavigationMenu />
      </StyledAbout>
    </>
  );
};

export default About;