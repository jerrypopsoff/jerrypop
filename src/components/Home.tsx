'use client';

import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';
import styled from 'styled-components';
import PageHeaderPhotographSrc from '../images/glamorous-habanero-ranch.jpeg';
import PressArticles from './PressArticles';
import { BUTTON_STYLE } from '../constants/css/button';
import Link from 'next/link';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';

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
      <PageHeaderPhotograph
        alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
        aspectRatioCss="3851 / 2268"
        src={PageHeaderPhotographSrc}
      />
      <StyledSection>
        <Heading1>Catering</Heading1>
        <Paragraph>
          Place a wholesale pickup order to make your space or event
          unforgettable.
        </Paragraph>
        <StyledLink href="/catering">Order catering</StyledLink>
      </StyledSection>
      <StyledSection>
        <Heading1>Pop-ups</Heading1>
        <Paragraph>
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
        </Paragraph>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/craftpopcorn/"
        >
          See announcements
        </StyledLink>
      </StyledSection>
      <Heading1>Press</Heading1>
      <PressArticles />
    </StyledHome>
  );
};

export default Home;
