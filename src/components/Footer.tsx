import React from 'react';
import SocialLinks from './SocialLinks';
import Typography from './Typography';
import styled from 'styled-components';
import Logo from './Logo';
import { useTheme } from '../hooks/use-theme';
import {
  FOOTER_TOP_MARGIN_PX,
  WINDOW_NARROW_WIDTH_PX,
} from '../constants/breakpoint';
import { WHITE } from '../constants/color';
import { increaseKernelCount } from '../utilities/click-pop';

const StyledFooter = styled.footer`
  margin: ${FOOTER_TOP_MARGIN_PX}px 0 0;
`;

const StyledThemeSection = styled.div`
  align-items: center;
  background-color: var(--main-theme-dark);
  color: ${WHITE};
  display: flex;
  height: 400px;
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
`;

const StyledSocialLinksContainer = styled.div`
  margin: 0 8px;
`;

const StyledPopcornButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledCopyright = styled(Typography)`
  font-size: 11px;
`;

const Footer: React.FC = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <StyledFooter>
      <StyledThemeSection>
        <Logo onToggleTheme={rotateTheme} theme={theme} />
      </StyledThemeSection>
      <StyledFooterInformation>
        <StyledPopcornButton onClick={() => increaseKernelCount()}>
          <StyledCopyright margin="0 8px" type="p">
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
