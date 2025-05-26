import EmailIconDark from '../images/email-icon-dark.svg';
import FacebookIconDark from '../images/facebook-icon-dark.svg';
import InstagramIconDark from '../images/instagram-icon-dark.svg';
import YouTubeIconDark from '../images/youtube-icon-dark.svg';
import {
  EMAIL_URL,
  FACEBOOK_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
  YOU_TUBE_CHANNEL_URL,
} from '../constants/url';
import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <ul className="flex">
      <li className="mx-1">
        <Link
          className="block p-1"
          href={FACEBOOK_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Jerrypop on Facebook"
            className="h-6 w-6"
            height={24}
            src={FacebookIconDark}
            width={24}
          />
        </Link>
      </li>
      <li className="mx-1">
        <Link
          className="block p-1"
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Jerrypop on Instagram"
            className="h-6 w-6"
            height={24}
            src={InstagramIconDark}
            width={24}
          />
        </Link>
      </li>
      <li className="mx-1">
        <Link
          className="block p-1"
          href={YOU_TUBE_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Jerrypop on YouTube"
            className="h-6 w-6"
            height={24}
            src={YouTubeIconDark}
            width={24}
          />
        </Link>
      </li>
      <li className="mx-1">
        <Link
          className="block p-1"
          href={EMAIL_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="Email Jerrypop"
            className="h-6 w-6"
            height={24}
            src={EmailIconDark}
            width={24}
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
