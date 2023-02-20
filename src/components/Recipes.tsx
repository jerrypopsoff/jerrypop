import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import EmailIcon from '../images/email-icon.svg';
import InstagramIcon from '../images/instagram-icon.svg';
import InternetIcon from '../images/internet-icon.svg';

const StyledBusinessCardFront = styled.div`
  background-color: white;
  color: #1b365f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 70px 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StyledWordmark = styled(Typography)`
  font-family: 'Cooper Nouveau';
`;

const StyledContactInformation = styled(Typography)`
  font-family: 'Brandon Text';
  font-size: 48px;
  font-weight: 400;
  text-shadow: none;
`;

const StyledSubwordmark = styled(StyledContactInformation)`
  font-size: 36px;
`;

const StyledSocialLinkIcon = styled.img`
  height: 40px;
  margin: 8px 20px 0;
  width: 40px;
`;

const StyledSocialLine = styled.div`
  align-items: center;
  display: flex;
  margin: 8px 0;
`;

/**
 * Screen dimensions: 680x1156
 */
const Recipes: React.FC = () => {
  return (
    <StyledBusinessCardFront>
      <div>
        <StyledWordmark
          hasTextShadow={false}
          fontSize={120}
          margin="0 0 -24px"
          type="p"
        >
          Jerrypop
        </StyledWordmark>
        <StyledSubwordmark type="p">Craft Popcorn</StyledSubwordmark>
      </div>
      <div>
        <StyledContactInformation margin="8px 0" type="p">
          Catering · Retail · Pop-ups
        </StyledContactInformation>
        <StyledSubwordmark margin="8px 0" type="p">
          San Francisco, CA
        </StyledSubwordmark>
      </div>
      <div>
        <StyledSocialLine>
          <StyledSocialLinkIcon alt="Instagram icon" src={InstagramIcon} />
          <StyledContactInformation margin="0" type="p">
            @craftpopcorn
          </StyledContactInformation>
        </StyledSocialLine>
        <StyledSocialLine>
          <StyledSocialLinkIcon alt="Email icon" src={EmailIcon} />
          <StyledContactInformation margin="0" type="p">
            info@jerrypop.com
          </StyledContactInformation>
        </StyledSocialLine>
        <StyledSocialLine>
          <StyledSocialLinkIcon alt="Website icon" src={InternetIcon} />
          <StyledContactInformation margin="0" type="p">
            jerrypop.com
          </StyledContactInformation>
        </StyledSocialLine>
      </div>
    </StyledBusinessCardFront>
  );
};

export default Recipes;
