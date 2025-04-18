import SocialLinks from './SocialLinks';
import Typography from './Typography';
import styled from 'styled-components';
import Logo from './Logo';
import { useTheme } from '../hooks/use-theme';
import {
  FOOTER_TOP_MARGIN_PX,
  WINDOW_NARROW_WIDTH_PX,
} from '../constants/breakpoint';
import { increaseKernelCount } from '../utilities/click-pop';

const StyledFooter = styled.footer`
  margin: ${FOOTER_TOP_MARGIN_PX}px 0 0;
`;

const StyledThemeSection = styled.div`
  align-items: center;
  background-color: var(--color-theme-background);
  display: flex;
  height: 350px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: ${WINDOW_NARROW_WIDTH_PX}px) {
    height: 280px;
  }
`;

const StyledFooterInformation = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 24px auto 0;
  max-width: 600px;
  padding: 0 16px 24px;

  @media (max-width: ${WINDOW_NARROW_WIDTH_PX}px) {
    flex-direction: column-reverse;
  }
`;

const StyledSocialLinksContainer = styled.div`
  margin: 0 8px;

  @media (max-width: ${WINDOW_NARROW_WIDTH_PX}px) {
    margin: 0 8px 12px;
  }
`;

const StyledPopcornButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-foreground);
`;

const StyledCopyright = styled(Typography)`
  font-size: 11px;
  margin: 0 8px;
`;

const Footer = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <StyledFooter>
      <StyledThemeSection>
        <Logo onToggleTheme={rotateTheme} theme={theme} />
      </StyledThemeSection>
      <StyledFooterInformation>
        <StyledPopcornButton onClick={() => increaseKernelCount()}>
          <StyledCopyright type="p">
            © {new Date().getFullYear()} Jerrypop, LLC
          </StyledCopyright>
        </StyledPopcornButton>
        <StyledSocialLinksContainer>
          <SocialLinks />
        </StyledSocialLinksContainer>
      </StyledFooterInformation>
    </StyledFooter>
  );
};

export default Footer;
