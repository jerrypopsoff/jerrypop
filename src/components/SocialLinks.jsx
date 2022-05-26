import InstagramIcon from '../images/instagram-icon.svg';
import React from 'react';
import YouTubeIcon from '../images/youtube-icon.svg';
import styled from 'styled-components';

const INSTAGRAM_FEED_URL = 'https://www.instagram.com/craftpopcorn/';
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

export default function SocialLinks() {
  return (
    <StyledSocialLinksList>
      <StyledSocialLinksListItem>
        <StyledSocialLink
          href={INSTAGRAM_FEED_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledSocialLinkIcon
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
