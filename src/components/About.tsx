import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import AboutPhotograph from '../images/about-jerry.jpeg';
import AboutPhotographWebp from '../images/about-jerry.webp';
import GlamorPhotograph from './GlamorPhotograph';
import BlueberryPancake600 from '../images/glamorous-blueberry-pancake-600.jpeg';
import BlueberryPancake1200 from '../images/glamorous-blueberry-pancake-1200.jpeg';
import BlueberryPancake2400 from '../images/glamorous-blueberry-pancake-2400.jpeg';
import BlueberryPancakeWebp600 from '../images/glamorous-blueberry-pancake-600.webp';
import BlueberryPancakeWebp1200 from '../images/glamorous-blueberry-pancake-1200.webp';
import BlueberryPancakeWebp2400 from '../images/glamorous-blueberry-pancake-2400.webp';
import OptimizedImage from './OptimizedImage';

const PHOTOGRAPH_MAX_WIDTH_PX = 400;
const PHOTOGRAPH_BREAKPOINT_PX = PHOTOGRAPH_MAX_WIDTH_PX + 24;

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

  @media (max-width: ${PHOTOGRAPH_BREAKPOINT_PX}px) {
    box-sizing: border-box;
    height: unset;
    padding: 0 12px;
    width: 100%;
  }
`;

const StyledAboutPhotograph = styled(OptimizedImage)`
  height: 534px;
  max-width: ${PHOTOGRAPH_MAX_WIDTH_PX}px;
  width: ${PHOTOGRAPH_MAX_WIDTH_PX}px;

  @media (max-width: ${PHOTOGRAPH_BREAKPOINT_PX}px) {
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
        <Typography type="h1">About</Typography>
        <StyledPhotographContainer>
          <StyledAboutPhotograph
            alt="Photograph of Jerry, founder and owner-operator of Jerrypop"
            fallbackSrc={AboutPhotograph}
            fallbackSrcSet={`${AboutPhotograph} 800w`}
            sizes={`${PHOTOGRAPH_MAX_WIDTH_PX}px (min-width: ${PHOTOGRAPH_BREAKPOINT_PX}px), 95vw`}
            srcSet={`${AboutPhotographWebp} 800w`}
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
        <Typography type="h2">Backstory</Typography>
        <Typography maxWidth="600px" type="p">
          In 2013 my interest in popcorn was sparked when my college roommate’s
          parents bought us ten pounds of kernels, and we challenged ourselves
          to use the entire supply before finals. After experimenting with
          flavors I discovered air-popped popcorn was a healthier alternative to
          junk food, and I continued inventing new varieties on my journey to
          losing 130 pounds.
        </Typography>
        <Typography maxWidth="600px" type="p">
          In 2015 I earned the nickname “Jerrypop” among friends for showing up
          to every gathering with a bold new flavor of handcrafted popcorn, such
          as PB&J or Habanero Ranch.
        </Typography>
        <Typography maxWidth="600px" type="p">
          After moving to San Francisco in 2017, I continued to hone my craft,
          eventually turning to{' '}
          <a
            href="https://youtube.com/@craftpopcorn"
            rel="noreferrer"
            target="_blank"
          >
            video production
          </a>{' '}
          during the pandemic to share my techniques and learnings. In April
          2022 I{' '}
          <a
            href="https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/"
            rel="noreferrer"
            target="_blank"
          >
            quit my job
          </a>{' '}
          to pursue my dream of starting a business dedicated to producing the
          most satisfying popcorn in the world.
        </Typography>
        <Typography maxWidth="600px" type="p">
          As the solo owner-operator of Jerrypop, I handle numerous functions
          including recipe development, ingredient sourcing, manufacturing,
          distribution, marketing, sales, web design, and more. Through Jerrypop
          I’ve had the opportunity to share my love of popcorn with others and
          bring delight to people’s lives. It’s been an incredible journey, and
          I could not have done it without the support of my friends and
          customers. Thank you for being part of this adventure with me. I look
          forward to sharing more with you soon.
        </Typography>
        <Typography type="h2">Mission</Typography>
        <Typography maxWidth="600px" type="p">
          I am committed to quality, sustainability, and customer satisfaction.
          My popcorn is made with only the finest ingredients and carefully
          crafted to ensure every bite is full of bold flavor and satisfying
          crunch. I believe that snacking should be an experience, and I’m
          dedicated to providing the best experience for my customers.
        </Typography>
        <Typography maxWidth="600px" type="p">
          My mission is twofold: to create delicious popcorn and promote
          environmental sustainability. Every bag of Jerrypop is sustainably
          handcrafted and packaged in a 100% compostable pouch. I believe that
          businesses have a responsibility to minimize their impact on the
          environment, and I hope to inspire others to do the same.
        </Typography>
        <Typography maxWidth="600px" type="p">
          Thank you for choosing Jerrypop. I’m excited to share my passion for
          craft popcorn with you and the lovely city of San Francisco.
        </Typography>
      </StyledAbout>
    </>
  );
};

export default About;
