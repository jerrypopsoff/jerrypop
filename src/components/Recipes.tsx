import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';

const StyledBusinessCardFront = styled.div`
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StyledSpacer = styled.div`
  height: 148px;
`;

const StyledContactInformation = styled(Typography)`
  font-size: 36px;
  font-weight: 300;
  margin: 8px 0;
  text-shadow: none;
`;

/**
 * Screen dimensions: 680x1156
 */
const Recipes: React.FC = () => {
  return (
    <StyledBusinessCardFront>
      <Typography
        hasTextShadow={false}
        fontSize={95}
        margin="270px 0 -24px"
        type="h1"
      >
        Jerry
      </Typography>
      <Typography hasTextShadow={false} fontSize={95} margin="0" type="h1">
        Haagsma
      </Typography>
      <StyledContactInformation type="p">Owner & CEO</StyledContactInformation>
      <StyledSpacer />
      <StyledContactInformation type="p">415-570-8472</StyledContactInformation>
      <StyledContactInformation type="p">
        info@jerrypop.com
      </StyledContactInformation>
      <StyledContactInformation type="p">
        www.jerrypop.com
      </StyledContactInformation>
      <StyledContactInformation type="p">
        San Francisco, CA
      </StyledContactInformation>
    </StyledBusinessCardFront>
  );
};

export default Recipes;
