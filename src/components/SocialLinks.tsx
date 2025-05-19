import EmailIconDark from '../images/email-icon-dark.svg';
import FacebookIconDark from '../images/facebook-icon-dark.svg';
import InstagramIconDark from '../images/instagram-icon-dark.svg';
import YouTubeIconDark from '../images/youtube-icon-dark.svg';
import styled from 'styled-components';
import {
  EMAIL_URL,
  FACEBOOK_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
  YOU_TUBE_CHANNEL_URL,
} from '../constants/url';
import Image from 'next/image';
import Link from 'next/link';

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

const StyledSocialLink = styled(Link)`
  display: flex;
  padding: 4px;
`;

const StyledSocialLinkIcon = styled(Image)`
  height: 24px;
  width: 24px;
`;

const SocialLinks = () => {
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
            height={24}
            src={FacebookIconDark.src}
            width={24}
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
            height={24}
            src={InstagramIconDark.src}
            width={24}
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
            height={24}
            src={YouTubeIconDark.src}
            width={24}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
      <StyledSocialLinksListItem>
        <StyledSocialLink href={EMAIL_URL} target="_blank" rel="noreferrer">
          <StyledSocialLinkIcon
            alt="Email Jerrypop"
            height={24}
            src={EmailIconDark.src}
            width={24}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
    </StyledSocialLinksList>
  );
};

export default SocialLinks;
