import React from 'react';
import SocialLinks from './SocialLinks';
import Typography from './Typography';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 78px auto 0;
  max-width: 600px;
  padding: 0 16px 24px;
`;

const StyledSocialLinksContainer = styled.div`
  margin: 0 8px;
`;

const StyledCopyright = styled(Typography)`
  font-size: 11px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledCopyright margin="0 8px" type="p">
        © {new Date().getFullYear()} Jerrypop, LLC
      </StyledCopyright>
      <StyledSocialLinksContainer>
        <SocialLinks />
      </StyledSocialLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
