import 'react-medium-image-zoom/dist/styles.css';
import HabaneroRanchBackLabel from '../images/jerrypop-hr-rear-label.svg';
import HabaneroRanchFrontLabel from '../images/jerrypop-hr-front-label.svg';
import PbjBackLabel from '../images/jerrypop-pbj-rear-label.svg';
import PbjFrontLabel from '../images/jerrypop-pbj-front-label.svg';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import styled from 'styled-components';

const StyledProductsContainer = styled.div`
  margin-bottom: 12px;
`;

const StyledProductContainer = styled.div`
  margin: 8px 0;
`;

const StyledLabelImage = styled.img`
  border: 1px solid var(--main-theme-light);
  margin: 4px;
  width: 150px;
`;

export default function Products() {
  return (
    <StyledProductsContainer>
      <StyledProductContainer>
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
      </StyledProductContainer>
      <StyledProductContainer>
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
      </StyledProductContainer>
    </StyledProductsContainer>
  );
}
