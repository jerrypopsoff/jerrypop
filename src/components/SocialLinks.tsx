import EmailIcon from '../images/email-icon.svg';
import EmailIconDark from '../images/email-icon-dark.svg';
import FacebookIcon from '../images/facebook-icon.svg';
import FacebookIconDark from '../images/facebook-icon-dark.svg';
import InstagramIcon from '../images/instagram-icon.svg';
import InstagramIconDark from '../images/instagram-icon-dark.svg';
import YouTubeIcon from '../images/youtube-icon.svg';
import YouTubeIconDark from '../images/youtube-icon-dark.svg';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/use-dark-mode';
import {
  EMAIL_URL,
  FACEBOOK_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
  YOU_TUBE_CHANNEL_URL,
} from '../constants/url';
import Image from 'next/image';

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

const StyledSocialLinkIcon = styled(Image)`
  height: 24px;
  padding: 4px;
  width: 24px;
`;

const SocialLinks = () => {
  const { isDarkMode } = useDarkMode();

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
            src={isDarkMode ? FacebookIconDark.src : FacebookIcon.src}
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
            src={isDarkMode ? InstagramIconDark.src : InstagramIcon.src}
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
            src={isDarkMode ? YouTubeIconDark.src : YouTubeIcon.src}
            width={24}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
      <StyledSocialLinksListItem>
        <StyledSocialLink href={EMAIL_URL} target="_blank" rel="noreferrer">
          <StyledSocialLinkIcon
            alt="Email Jerrypop"
            height={24}
            src={isDarkMode ? EmailIconDark.src : EmailIcon.src}
            width={24}
          />
        </StyledSocialLink>
      </StyledSocialLinksListItem>
    </StyledSocialLinksList>
  );
};

export default SocialLinks;
