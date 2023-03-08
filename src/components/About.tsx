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
          My interest in popcorn sparked in 2013 in Ann Arbor, MI. My college
          roommate’s parents bought us ten pounds of popcorn kernels, and we
          challenged ourselves to use the entire supply before our lease ended
          four months later. Although buttered & salted popcorn is a classic
          that I will always love, there was only so much we could eat before
          feeling compelled to experiment. We developed a few simple flavors
          like <i>spicy cajun</i> and <i>cinnamon sugar</i>, and we brought
          gigantic bowls of them to our friends’ house parties to share with
          anyone in need of a snack.
        </Typography>
        <Typography maxWidth="600px" type="p">
          Later in 2013, starting a career in software engineering brought me to
          Fort Lauderdale, FL. Shortly after relocating, I began a journey of
          losing 130 pounds in 14 months. Replacing junk food with lightly
          seasoned, air-popped popcorn helped me limit my calorie intake without
          giving up my favorite food group: snacks. In the meantime I continued
          inventing and perfecting new flavors and techniques, including my
          signature <i>Habanero Ranch</i> and <i>PB&J</i> craft popcorn
          varieties.
        </Typography>
        <Typography maxWidth="600px" type="p">
          It didn’t take long for me to earn a reputation with my friends for
          showing up to every social gathering with a bold new flavor of
          handcrafted popcorn, and in 2015 the nickname “Jerrypop” was born.
        </Typography>
        <Typography maxWidth="600px" type="p">
          In 2017 my career as a software engineer brought me to lovely San
          Francisco, CA, where I spent a few more years developing and honing
          craft popcorn flavors and techniques. As a means to cope with the
          abrupt lifestyle changes caused by COVID-19, I delved into a new
          hobby: video production. I began filming, editing, and producing{' '}
          <a
            href="https://youtube.com/@craftpopcorn"
            rel="noreferrer"
            target="_blank"
          >
            <i>Poppin’ off with Jerry</i>
          </a>
          , a series of videos demonstrating how to make craft popcorn at home.
        </Typography>
        <Typography maxWidth="600px" type="p">
          In April 2022 my popcorn obsession had reached unprecedented levels.
          After two of my closest friends stepped away from their careers to
          pursue their passions full-time, I was inspired to{' '}
          <a
            href="https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/"
            rel="noreferrer"
            target="_blank"
          >
            quit my job
          </a>{' '}
          to live out my dream of starting a business dedicated to producing and
          sharing the most satisfying popcorn in the world.
        </Typography>
        <Typography maxWidth="600px" type="p">
          Since then I have poured myself into Jerrypop as a solo
          owner-operator, taking on work spanning numerous functions including
          recipe development, ingredient sourcing, food manufacturing,
          cleaning/sanitization, distribution, finance, marketing, sales, web
          design/development, event coordination, and more. Jerrypop “
          <a
            href="https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/"
            rel="noreferrer"
            target="_blank"
          >
            <i>
              has been an opportunity to let my creativity shine in ways people
              directly appreciate
            </i>
          </a>
          ,” and I could not feel more fulfilled.
        </Typography>
        <Typography type="h2">Mission</Typography>
        <Typography maxWidth="600px" type="p">
          At Jerrypop, I am committed to quality, sustainability, and customer
          satisfaction. My popcorn is made with only the finest ingredients and
          carefully crafted to ensure every bite is full of bold flavor and
          satisfying crunch. I believe that snacking should be an experience,
          and I’m dedicated to providing that experience to my customers.
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
