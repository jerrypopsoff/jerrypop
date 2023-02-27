import FacebookIcon from '../images/facebook-icon.svg';
import FacebookIconDark from '../images/facebook-icon-dark.svg';
import InstagramIcon from '../images/instagram-icon.svg';
import InstagramIconDark from '../images/instagram-icon-dark.svg';
import React from 'react';
import YouTubeIcon from '../images/youtube-icon.svg';
import YouTubeIconDark from '../images/youtube-icon-dark.svg';
import styled from 'styled-components';
import { isDarkMode } from '../utilities/dark-mode';

const FACEBOOK_PROFILE_URL = 'https://www.facebook.com/craftpopcorn/';
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/craftpopcorn/';
const YOU_TUBE_CHANNEL_URL =
  'https://www.youtube.com/channel/UC_3oErdLxGZgeTf8nrwsD3A';

const StyledSocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledSocialLinksListItem = styled.li`
  margin: 0 4px;
`;

const StyledSocialLink = styled.a`
  display: flex;
`;

const StyledSocialLinkIcon = styled.img`
  height: 24px;
  padding: 4px;
  width: 24px;
`;

const SocialLinks: React.FC = () => {
  const isDark = isDarkMode();

  return (
    <StyledSocialLinksList>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={FACEBOOK_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialLinkIcon
            alt="Jerrypop on Facebook"
            src={isDark ? FacebookIconDark : FacebookIcon}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialLinkIcon
            alt="Jerrypop on Instagram"
            src={isDark ? InstagramIconDark : InstagramIcon}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={YOU_TUBE_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
        >
          <StyledSocialLinkIcon
            alt="Jerrypop on YouTube"
            src={isDark ? YouTubeIconDark : YouTubeIcon}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
    </StyledSocialLinksList>
  );
};

export default SocialLinks;
