'use client';

import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-habanero-ranch.jpeg';
import PressArticles from './PressArticles';
import Link from 'next/link';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';
import PageContentLayout from './PageContentLayout';
import ButtonLink from './common/ButtonLink';

const POP_UP_REQUEST_EMAIL_SUBJECT = 'Jerrypop pop-up request';
const POP_UP_REQUEST_EMAIL_BODY =
  "Hi Jerrypop,\n\nI'd like for you to pop up at [my event] at [location] on [date] from [time range]. Are you available?\n\nThanks,\n[name]";

const Home = () => {
  const encodedEmailSubject = encodeURIComponent(POP_UP_REQUEST_EMAIL_SUBJECT);
  const encodedEmailBody = encodeURIComponent(POP_UP_REQUEST_EMAIL_BODY);
  const requestPopUpHref = `mailto:info@jerrypop.com?subject=${encodedEmailSubject}&body=${encodedEmailBody}`;

  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
        aspectRatioCss="3851 / 2268"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Catering</Heading1>
        <Paragraph>
          Place a wholesale pickup order to make your space or event
          unforgettable.
        </Paragraph>
        <ButtonLink className="my-3" href="/catering">
          Order catering
        </ButtonLink>
        <Heading1>Pop-ups</Heading1>
        <Paragraph>
          Catch my next pop-up or{' '}
          <Link
            className="underline"
            href={requestPopUpHref}
            rel="noreferrer"
            target="_blank"
          >
            request a pop-up
          </Link>{' '}
          at your event.
        </Paragraph>
        <ButtonLink
          className="my-3"
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/craftpopcorn/"
        >
          See upcoming pop-ups
        </ButtonLink>
        <Heading1>Press</Heading1>
      </PageContentLayout>
      <PressArticles />
    </>
  );
};

export default Home;
