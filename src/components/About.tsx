'use client';

import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import BlueberryPancake600 from '../images/glamorous-blueberry-pancake-600.jpeg';
import BlueberryPancake1200 from '../images/glamorous-blueberry-pancake-1200.jpeg';
import BlueberryPancake2400 from '../images/glamorous-blueberry-pancake-2400.jpeg';
import BlueberryPancakeWebp600 from '../images/glamorous-blueberry-pancake-600.webp';
import BlueberryPancakeWebp1200 from '../images/glamorous-blueberry-pancake-1200.webp';
import BlueberryPancakeWebp2400 from '../images/glamorous-blueberry-pancake-2400.webp';
import Team from './Team';

const StyledAbout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const About = () => {
  return (
    <StyledAbout>
      <GlamorPhotograph
        alt="Photograph of a red bowl of Blueberry Pancake Craft Popcorn taken outdoors from directly above"
        aspectRatio={3557 / 2260}
        fallbackSrc={BlueberryPancake2400.src}
        fallbackSourceSet={[
          { size: '600w', src: BlueberryPancake600.src },
          { size: '1200w', src: BlueberryPancake1200.src },
          { size: '2400w', src: BlueberryPancake2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: BlueberryPancakeWebp600.src },
          { size: '1200w', src: BlueberryPancakeWebp1200.src },
          { size: '2400w', src: BlueberryPancakeWebp2400.src },
        ]}
      />
      <Typography type="h1">About</Typography>
      <Typography type="h2">Mission</Typography>
      <Typography maxWidth="600px" type="p">
        We at Jerrypop are committed to quality, sustainability, and customer
        satisfaction. Our popcorn is made with only the finest ingredients and
        carefully crafted to ensure every bite is full of bold flavor and
        satisfying crunch. We believe that snacking should be an experience, and
        we’re dedicated to providing the best experience for our customers.
      </Typography>
      <Typography maxWidth="600px" type="p">
        Our mission is twofold: to create delicious popcorn and to promote
        environmental sustainability. Every bag of Jerrypop is sustainably
        crafted and packaged in a 100% compostable pouch. We believe that
        businesses have a responsibility to minimize their impact on the
        environment, and we aim to inspire others to do the same.
      </Typography>
      <Typography type="h2">Team</Typography>
      <Team />
    </StyledAbout>
  );
};

export default About;
