import 'react-medium-image-zoom/dist/styles.css';
import HabaneroRanchBackLabel from '../images/jerrypop-hr-rear-label.svg';
import HabaneroRanchFrontLabel from '../images/jerrypop-hr-front-label.svg';
import PbjBackLabel from '../images/jerrypop-pbj-rear-label.svg';
import PbjFrontLabel from '../images/jerrypop-pbj-front-label.svg';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import styled from 'styled-components';
import { withBoxShadow } from '../constants/css/shadow';

const StyledProductHeading = styled.h3`
  text-transform: uppercase;
`;

const StyledProductImages = styled.div`
  height: 203px; // Mitigate screen flash for image loading state ending
  margin-bottom: 24px;
`;

const StyledLabelImage = styled.img`
  ${withBoxShadow}
  border: 1px solid var(--main-theme-light);
  border-radius: 4px;
  margin: 8px;
  width: 150px;
`;

export default function Products() {
  return (
    <>
      <StyledProductHeading>PB&J Craft Popcorn</StyledProductHeading>
      <StyledProductImages>
        <Zoom>
          <StyledLabelImage
            alt="Front label for PB&J Craft Popcorn"
            src={PbjFrontLabel}
          />
          <StyledLabelImage
            alt="Back label for PB&J Craft Popcorn"
            src={PbjBackLabel}
          />
        </Zoom>
      </StyledProductImages>
      <StyledProductHeading>Habanero Ranch Craft Popcorn</StyledProductHeading>
      <StyledProductImages>
        <Zoom>
          <StyledLabelImage
            alt="Front label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchFrontLabel}
          />
          <StyledLabelImage
            alt="Back label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchBackLabel}
          />
        </Zoom>
      </StyledProductImages>
    </>
  );
}
