import 'react-medium-image-zoom/dist/styles.css';
import { DIALOG_BACKDROP, WHITE } from '../constants/color';
import { DIALOG_Z_INDEX } from '../constants/z-index';
import HabaneroRanchBackLabel from '../images/jerrypop-hr-rear-label.svg';
import HabaneroRanchFrontLabel from '../images/jerrypop-hr-front-label.svg';
import PbjBackLabel from '../images/jerrypop-pbj-rear-label.svg';
import PbjFrontLabel from '../images/jerrypop-pbj-front-label.svg';
import React from 'react';
import Typography from './Typography';
import Zoom from 'react-medium-image-zoom';
import styled from 'styled-components';
import { withBoxShadow } from '../constants/css/shadow';

const StyledProductImages = styled.div`
  height: 203px; // Mitigate screen flash for image loading state ending
  margin-bottom: 24px;
`;

const StyledLabelImage = styled.img`
  ${withBoxShadow}
  border: 1px solid ${WHITE};
  border-radius: 4px;
  width: 150px;
`;

const ProductImageZoom = ({ children }) => {
  return (
    <Zoom
      overlayBgColorEnd={DIALOG_BACKDROP}
      transitionDuration={0}
      wrapStyle={{ padding: '8px' }}
      zoomMargin={8}
      zoomZindex={DIALOG_Z_INDEX}
    >
      {children}
    </Zoom>
  );
};

export default function Products() {
  return (
    <>
      <Typography type="h3">PB&J Craft Popcorn</Typography>
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
      <Typography type="h3">Habanero Ranch Craft Popcorn</Typography>
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
    </>
  );
}
