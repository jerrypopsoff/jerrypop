'use client';

import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import HabaneroRanch600 from '../images/glamorous-habanero-ranch-600.jpeg';
import HabaneroRanch1200 from '../images/glamorous-habanero-ranch-1200.jpeg';
import HabaneroRanch2400 from '../images/glamorous-habanero-ranch-2400.jpeg';
import HabaneroRanchWebp600 from '../images/glamorous-habanero-ranch-600.webp';
import HabaneroRanchWebp1200 from '../images/glamorous-habanero-ranch-1200.webp';
import HabaneroRanchWebp2400 from '../images/glamorous-habanero-ranch-2400.webp';
import PressArticles from './PressArticles';
import { BUTTON_STYLE } from '../constants/css/button';
import Link from 'next/link';

const POP_UP_REQUEST_EMAIL_SUBJECT = 'Jerrypop pop-up request';
const POP_UP_REQUEST_EMAIL_BODY =
  "Hi Jerrypop,\n\nI'd like for you to pop up at [my event] at [location] on [date] from [time range]. Are you available?\n\nThanks,\n[name]";

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  ${BUTTON_STYLE}
`;

const Home = () => {
  return (
    <StyledHome>
      <GlamorPhotograph
        alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
        aspectRatio={17 / 10}
        fallbackSrc={HabaneroRanch2400.src}
        fallbackSourceSet={[
          { size: '600w', src: HabaneroRanch600.src },
          { size: '1200w', src: HabaneroRanch1200.src },
          { size: '2400w', src: HabaneroRanch2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: HabaneroRanchWebp600.src },
          { size: '1200w', src: HabaneroRanchWebp1200.src },
          { size: '2400w', src: HabaneroRanchWebp2400.src },
        ]}
      />
      <StyledSection>
        <Typography type="h1">Catering</Typography>
        <Typography type="p">
          Place a wholesale pickup order to make your space or event
          unforgettable.
        </Typography>
        <StyledLink href="/catering">Order catering</StyledLink>
      </StyledSection>
      <StyledSection>
        <Typography type="h1">Pop-ups</Typography>
        <Typography type="p">
          Catch my next pop-up or{' '}
          <Link
            href={`mailto:info@jerrypop.com?subject=${encodeURIComponent(
              POP_UP_REQUEST_EMAIL_SUBJECT,
            )}&body=${encodeURIComponent(POP_UP_REQUEST_EMAIL_BODY)}`}
            rel="noreferrer"
            target="_blank"
          >
            request a pop-up
          </Link>{' '}
          at your event.
        </Typography>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/craftpopcorn/"
        >
          See announcements
        </StyledLink>
      </StyledSection>
      <Typography type="h1">Press</Typography>
      <PressArticles />
    </StyledHome>
  );
};

export default Home;
