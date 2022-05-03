import {
  StyledInstagramIcon,
  StyledSocialLink,
  StyledSocialLinkIcon,
  StyledSocialLinksList,
  StyledSocialLinksListItem,
} from '../styled-components/SocialLinks';
import InstagramIcon from '../images/InstagramIcon.png';
import React from 'react';
import YouTubeIcon from '../images/YouTubeIcon.png';

const INSTAGRAM_FEED_URL = 'https://www.instagram.com/craftpopcorn/';
const YOU_TUBE_CHANNEL_URL =
  'https://www.youtube.com/channel/UC_3oErdLxGZgeTf8nrwsD3A';

export default function SocialLinks() {
  return (
    <StyledSocialLinksList>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={INSTAGRAM_FEED_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledInstagramIcon
            alt="Jerrypop on Instagram"
            src={InstagramIcon}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={YOU_TUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledSocialLinkIcon alt="Jerrypop on YouTube" src={YouTubeIcon} />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
    </StyledSocialLinksList>
  );
}
