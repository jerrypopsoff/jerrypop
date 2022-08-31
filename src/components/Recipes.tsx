import React from 'react';
import Typography from './Typography';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import habpop from '../images/habpop.png';
import styled from 'styled-components';
import { getRandomInteger } from '../utilities/random';

const StyledBusinessCardFront = styled.div`
  background-color: white;
  color: rgba(160, 37, 42, 1);
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

const StyledImage = styled.img`
  position: fixed;
  width: 150px;
  z-index: -1;
`;

// const StyledBgImage = styled.div`
//   background-image: url('../images/pepps.jpeg');
//   position: fixed;
//   top: 700px;
//   left: 35vw;
//   width: 400px;
//   height: 400px;
//   z-index: -1;
// `;

/**
 * Screen dimensions: 680x1156
 */
const Recipes: React.FC = () => {
  return (
    <StyledBusinessCardFront>
      {Array(50)
        .fill(0)
        .map(() => (
          <StyledImage
            src={habpop}
            style={{
              left: `${getRandomInteger(0, 850)}px`,
              top: `${getRandomInteger(0, 1050)}px`,
              transform: `rotate(${getRandomInteger(0, 359)}deg)`,
            }}
          />
        ))}
      {/* <StyledBgImage /> */}
      <Typography fontSize={95} margin="300px 0 -24px" type="h1">
        Chili pepper
      </Typography>
      <Typography fontSize={95} margin="0" type="h1">
        house warming
      </Typography>
      <StyledContactInformation type="p">
        at jerrypop’s
      </StyledContactInformation>
      <StyledSpacer />
      <StyledContactInformation type="p">
        saturday 3 september 12-6pm
      </StyledContactInformation>
      <StyledContactInformation type="p">
        1431 grove st
      </StyledContactInformation>
      <StyledContactInformation type="p">
        ample bites provided
      </StyledContactInformation>
      <StyledContactInformation type="p">
        spicy margs (while supplies last)
      </StyledContactInformation>
    </StyledBusinessCardFront>
  );
};

export default Recipes;
