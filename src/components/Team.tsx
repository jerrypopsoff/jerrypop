import Paragraph from './common/Paragraph';
import AboutJerryPhotograph from '../images/about-jerry.jpeg';
import OptimizedImage from './common/OptimizedImage';
import { YOU_TUBE_CHANNEL_URL } from '../constants/url';
import Link from 'next/link';

const Team = () => {
  return (
    <ul>
      <li className="mt-6">
        <OptimizedImage
          alt="Photograph of Jerry Haagsma, founder of Jerrypop"
          aspectRatioCss="600 / 800"
          className="mx-auto"
          sizes={`300px (min-width: 315px), 95vw`}
          src={AboutJerryPhotograph}
          widthCss="min(95vw, 18.75rem)"
        />
        <h3 className="mb-1 mt-3 text-2xl font-semibold uppercase">
          Jerry Haagsma
        </h3>
        <h4 className="mb-6 text-sm font-light uppercase">Founder</h4>
        <Paragraph>
          In 2013 my interest in popcorn was sparked when my college
          roommate&apos;s parents bought us ten pounds of kernels, and we
          challenged ourselves to use the entire supply before finals. After
          experimenting with flavors I discovered popcorn was a healthier
          alternative to junk food, and I continued inventing new varieties on
          my journey to losing 130 pounds.
        </Paragraph>
        <Paragraph>
          In 2015 I earned the nickname <i>Jerrypop</i> among friends for
          showing up to every gathering with a bold new flavor of handcrafted
          popcorn, such as PB&J or Habanero Ranch.
        </Paragraph>
        <Paragraph>
          After moving to San Francisco in 2017, I continued to hone my craft,
          eventually turning to{' '}
          <Link href={YOU_TUBE_CHANNEL_URL} rel="noreferrer" target="_blank">
            video production
          </Link>{' '}
          during the pandemic to share my popcorn techniques and learnings. In
          April 2022 I{' '}
          <Link
            href="https://www.washingtonpost.com/technology/2023/02/27/tech-workers-layoffs-quit/"
            rel="noreferrer"
            target="_blank"
          >
            quit my job
          </Link>{' '}
          to pursue my dream of starting a business dedicated to producing the
          most satisfying popcorn in the world.
        </Paragraph>
        <Paragraph>
          I handle numerous functions including recipe development, ingredient
          sourcing, manufacturing, distribution, marketing, sales, web design,
          and more. Through Jerrypop I&apos;ve had the opportunity to share my
          love of popcorn with others and bring delight to people&apos;s lives.
          It&apos;s been an incredible journey, and I could not have done it
          without the support of my friends and customers.
        </Paragraph>
      </li>
    </ul>
  );
};

export default Team;
