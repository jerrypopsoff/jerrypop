import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import AboutPhotograph from '../images/about-jerry.jpeg';
import GlamorPhotograph from './GlamorPhotograph';
import BlueberryPancake600 from '../images/glamorous-blueberry-pancake-600.jpeg';
import BlueberryPancake1200 from '../images/glamorous-blueberry-pancake-1200.jpeg';
import BlueberryPancake2400 from '../images/glamorous-blueberry-pancake-2400.jpeg';
import BlueberryPancakeWebp600 from '../images/glamorous-blueberry-pancake-600.webp';
import BlueberryPancakeWebp1200 from '../images/glamorous-blueberry-pancake-1200.webp';
import BlueberryPancakeWebp2400 from '../images/glamorous-blueberry-pancake-2400.webp';

const PHOTOGRAPH_MAX_WIDTH_PX = 400;

const StyledAbout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledPhotographContainer = styled.div`
  height: 555px;
  margin: 24px 0;
  text-align: left;

  @media (max-width: ${PHOTOGRAPH_MAX_WIDTH_PX + 24}px) {
    box-sizing: border-box;
    height: unset;
    padding: 0 12px;
    width: 100%;
  }
`;

const StyledAboutPhotograph = styled.img`
  height: 534px;
  max-width: ${PHOTOGRAPH_MAX_WIDTH_PX}px;
  width: ${PHOTOGRAPH_MAX_WIDTH_PX}px;

  @media (max-width: ${PHOTOGRAPH_MAX_WIDTH_PX + 24}px) {
    height: unset;
    width: 100%;
  }
`;

const StyledPhotographCredit = styled(Typography)`
  font-size: 12px;
  margin: 4px 0 0;
`;

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About · Jerrypop</title>
      </Helmet>
      <StyledAbout>
        <GlamorPhotograph
          alt="Photograph of a red bowl of Blueberry Pancake Craft Popcorn taken outdoors from directly above"
          aspectRatio={3557 / 2260}
          fallbackSrc={BlueberryPancake2400}
          fallbackSrcSet={`${BlueberryPancake600} 600w, ${BlueberryPancake1200} 1200w, ${BlueberryPancake2400} 2400w`}
          srcSet={`${BlueberryPancakeWebp600} 600w, ${BlueberryPancakeWebp1200} 1200w, ${BlueberryPancakeWebp2400} 2400w`}
        />
        <Typography type="h1">About Jerry</Typography>
        <StyledPhotographContainer>
          <StyledAboutPhotograph
            alt="Photograph of Jerry, founder and owner-operator of Jerrypop"
            src={AboutPhotograph}
          />
          <StyledPhotographCredit type="p">
            Photograph by{' '}
            <a
              href="https://www.malindiwalker.com/"
              rel="noreferrer"
              target="_blank"
            >
              Malindi Walker
            </a>
          </StyledPhotographCredit>
        </StyledPhotographContainer>
        <Typography maxWidth="600px" type="p">
          My interest in popcorn sparked in 2013, when I began making lightly
          flavored popcorn on my journey to losing 130 pounds in 14 months.
          Afterward my focus shifted from healthy snacking to flavor blasting,
          resulting in Jerrypop’s signature bold flavors and undeniably
          satisfying crunch.
        </Typography>
        <Typography maxWidth="600px" type="p">
          In April 2022 I quit my job to live out my dream of starting a
          business dedicated to producing the most satisfying craft popcorn in
          the world. Now that I’ve accomplished that goal, I have focused my
          efforts on sharing it with the lovely city of San Francisco.
        </Typography>
        <Typography maxWidth="600px" type="p">
          Although my dedication to popcorn quality is my highest priority,
          Jerrypop’s mission is twofold. The packaged foods industry is in need
          of a strong shift toward environmental sustainability. In addition to
          sharing delightful craft popcorn with the world, I aim to minimize my
          impact on the environment and influence others to do the same. That is
          why every bag of Jerrypop is sustainably handcrafted and packaged in a
          100% compostable pouch.
        </Typography>
      </StyledAbout>
    </>
  );
};

export default About;
