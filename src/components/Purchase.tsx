import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import styled from 'styled-components';
import VeganIcon from '../images/vegan-icon-2.png';

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
  height: 19px;
  margin: -4px 6px;
  width: 19px;
`;

const Purchase: React.FC = () => {
  /**
   * 1. Open devtools to responsive mode
   * 2. 492px wide 682px tall inner window dimensions
   * 3. Zoom to 150%
   * 4. Cmd + Shift + P, type "screenshot", select "Capture screenshot"
   * 5. Open file in Preview and print at 35% scale
   */
  return (
    <>
      <Helmet>
        <title>Purchase · Jerrypop</title>
      </Helmet>
      <StyledPageContent>
        <StyledLineItem margin="120px 0 4px">
          <Typography margin="0" type="h3">
            PB&J Craft Popcorn
            <StyledVeganIcon alt="Vegan icon" src={VeganIcon} />
          </Typography>
          <Typography margin="0" type="h3">
            $5 · $12
          </Typography>
        </StyledLineItem>
        <StyledLineItem>
          <Typography margin="0" type="h3">
            Habanero Ranch Craft Popcorn
          </Typography>
          <Typography margin="0" type="h3">
            $3 · $9
          </Typography>
        </StyledLineItem>
        <StyledLineItem margin="4px 0">
          <Typography margin="0" type="h3">
            Sticker
          </Typography>
          <Typography margin="0" type="h3">
            $1
          </Typography>
        </StyledLineItem>
        <Typography type="h4">All packaging 100% compostable</Typography>
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
