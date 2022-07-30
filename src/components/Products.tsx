import 'react-medium-image-zoom/dist/styles.css';
import HabaneroRanchBackLabel from '../images/jerrypop-hr-rear-label.svg';
import HabaneroRanchFrontLabel from '../images/jerrypop-hr-front-label.svg';
import PbjBackLabel from '../images/jerrypop-pbj-rear-label.svg';
import PbjFrontLabel from '../images/jerrypop-pbj-front-label.svg';
import ProductImageZoom from './ProductImageZoom';
import React from 'react';
import Typography from './Typography';
import { WHITE } from '../constants/color';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import { pulse } from '../constants/css/pulse';
import styled from 'styled-components';
import { withBoxShadow } from '../constants/css/shadow';

const StyledProductImages = styled.div`
  height: 203px; // Mitigate screen flash for image loading state ending
`;

const StyledLabelImage = styled.img`
  ${withBoxShadow}
  border: 1px solid ${WHITE};
  border-radius: 4px;
  width: 150px;
`;

const StyledOrderOnlineButton = styled.button`
  ${buttonStyle}
  ${pulse}
  margin: 24px 0;

  &:hover,
  &:focus {
    ${dangleRotation}
  }
`;

interface Props {
  onClickOrderOnline: () => void;
}

const Products: React.FC<Props> = ({ onClickOrderOnline }) => {
  return (
    <>
      <Typography type="h2">PB&J Craft Popcorn</Typography>
      <StyledProductImages>
        <ProductImageZoom>
          <StyledLabelImage
            alt="Front label for PB&J Craft Popcorn"
            src={PbjFrontLabel}
          />
        </ProductImageZoom>
        <ProductImageZoom>
          <StyledLabelImage
            alt="Back label for PB&J Craft Popcorn"
            src={PbjBackLabel}
          />
        </ProductImageZoom>
      </StyledProductImages>
      <StyledOrderOnlineButton onClick={onClickOrderOnline}>
        Order online
      </StyledOrderOnlineButton>
      <Typography type="h2">Habanero Ranch Craft Popcorn</Typography>
      <StyledProductImages>
        <ProductImageZoom>
          <StyledLabelImage
            alt="Front label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchFrontLabel}
          />
        </ProductImageZoom>
        <ProductImageZoom>
          <StyledLabelImage
            alt="Back label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchBackLabel}
          />
        </ProductImageZoom>
      </StyledProductImages>
      <StyledOrderOnlineButton onClick={onClickOrderOnline}>
        Order online
      </StyledOrderOnlineButton>
    </>
  );
};

export default Products;
