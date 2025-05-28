'use client';

import PageHeaderPhotographSrc from '../images/glamorous-blueberry-pancake.jpeg';
import { Team } from './Team';
import { PageContentLayout } from './PageContentLayout';
import { Heading1 } from './common/Heading1';
import { Paragraph } from './common/Paragraph';
import { Heading2 } from './common/Heading2';
import { PageHeaderPhotograph } from './common/PageHeaderPhotograph';

export function About() {
  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of a red bowl of Blueberry Pancake Craft Popcorn taken outdoors from directly above"
        aspectRatioCss="3557 / 2260"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>About</Heading1>
        <Heading2>Mission</Heading2>
        <Paragraph>
          We at Jerrypop are committed to quality, sustainability, and customer
          satisfaction. Our popcorn is made with only the finest ingredients and
          carefully crafted to ensure every bite is full of bold flavor and
          satisfying crunch. We believe that snacking should be an experience,
          and we’re dedicated to providing the best experience for our
          customers.
        </Paragraph>
        <Paragraph>
          Our mission is twofold: to create delicious popcorn and to promote
          environmental sustainability. Every bag of Jerrypop is sustainably
          crafted and packaged in a 100% compostable pouch. We believe that
          businesses have a responsibility to minimize their impact on the
          environment, and we aim to inspire others to do the same.
        </Paragraph>
        <Heading2>Team</Heading2>
        <Team />
      </PageContentLayout>
    </>
  );
}
