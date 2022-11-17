import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import styled from 'styled-components';
import VeganIcon from '../images/leaves-icon.svg';
import InstagramIcon from '../images/instagram-icon.svg';
import ThePageLogo from '../images/pagelogo_bw.gif';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledLineItem = styled.div<{ margin?: string }>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : '4px 0')};
  width: 410px;
`;

const StyledVeganIcon = styled.img`
  height: 12px;
  margin: 0.5px 6px;
`;

const StyledPageLogo = styled.img`
  height: 100px;
  position: absolute;
  top: 94px;
  left: 250px;
`;

const StyledSocialLinkIcon = styled.img`
  height: 12px;
  margin: -2px 5px;
  width: 12px;
`;

const StyledSubtleTypography = styled(Typography)`
  -webkit-text-stroke-width: 0px;
`;

const StyledInstagramTypography = styled(StyledSubtleTypography)`
  font-weight: 500;
  text-transform: lowercase;
`;

const Purchase: React.FC = () => {
  /**
   * 1. Open devtools to responsive mode
   * 2. 492px wide 362px tall inner window dimensions
   * 3. Zoom to 150%
   * 4. Set leaves-icon.svg to appropriate color for background contrast
   * 5. Cmd + Shift + P, type "screenshot", select "Capture screenshot"
   * 6. Open file in Preview and print at 35% scale
   */
  return (
    <>
      <Helmet>
        <title>Purchase · Jerrypop</title>
      </Helmet>
      <StyledPageLogo src={ThePageLogo} />
      <StyledPageContent>
        <StyledLineItem margin="102px 0 4px">
          <Typography margin="0" type="h3">
            PB&J Craft Popcorn
            <StyledVeganIcon alt="Vegan icon" src={VeganIcon} />
          </Typography>
          <Typography margin="0" type="h3">
            $9
          </Typography>
        </StyledLineItem>
        <StyledLineItem>
          <Typography margin="0" type="h3">
            Habanero Ranch Craft Popcorn
          </Typography>
          <Typography margin="0" type="h3">
            $7
          </Typography>
        </StyledLineItem>
        {/* <StyledLineItem margin="4px 0">
          <Typography margin="0" type="h3">
            Sticker
          </Typography>
          <Typography margin="0" type="h3">
            $1
          </Typography>
        </StyledLineItem> */}
        {/* <StyledLineItem margin="24px 0">
          <StyledSubtleTypography margin="0" type="h4">
            All packaging 100% compostable
          </StyledSubtleTypography>
          <StyledInstagramTypography hasTextShadow={false} margin="0" type="h4">
            <StyledSocialLinkIcon
              alt="Jerrypop on Instagram"
              src={InstagramIcon}
            />
            @craftpopcorn
          </StyledInstagramTypography>
        </StyledLineItem> */}
        {/* <StyledLineItem margin="120px 0 4px">
          <Typography hasTextShadow={false} margin="0" type="h3">
            PB&J Craft Popcorn
            <StyledVeganIcon alt="Vegan icon" src={VeganIcon} />
          </Typography>
          <Typography hasTextShadow={false} margin="0" type="h3">
            $5 · $12
          </Typography>
        </StyledLineItem>
        <StyledLineItem>
          <Typography hasTextShadow={false} margin="0" type="h3">
            Habanero Ranch Craft Popcorn
          </Typography>
          <Typography hasTextShadow={false} margin="0" type="h3">
            $3 · $9
          </Typography>
        </StyledLineItem>
        <StyledLineItem margin="4px 0">
          <Typography hasTextShadow={false} margin="0" type="h3">
            Sticker
          </Typography>
          <Typography hasTextShadow={false} margin="0" type="h3">
            $1
          </Typography>
        </StyledLineItem>
        <Typography hasTextShadow={false} type="h4">
          All packaging 100% compostable
        </Typography> */}
      </StyledPageContent>
    </>
  );
};

export default Purchase;
