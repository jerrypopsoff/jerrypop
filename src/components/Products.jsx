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
  width: 150px;
`;

const OVERLAY_BG_COLOR_START = 'rgba(0, 0, 0, 0)';
const OVERLAY_BG_COLOR_END = 'rgba(0, 0, 0, 0.8)';
const ZOOM_TRANSITION_DURATION = 0;
const ZOOM_WRAP_STYLE = { padding: '8px' };
const ZOOM_ZOOM_MARGIN = 8;

export default function Products() {
  return (
    <>
      <StyledProductHeading>PB&J Craft Popcorn</StyledProductHeading>
      <StyledProductImages>
        <Zoom
          overlayBgColorEnd={OVERLAY_BG_COLOR_END}
          overlayBgColorStart={OVERLAY_BG_COLOR_START}
          transitionDuration={ZOOM_TRANSITION_DURATION}
          wrapStyle={ZOOM_WRAP_STYLE}
          zoomMargin={ZOOM_ZOOM_MARGIN}
        >
          <StyledLabelImage
            alt="Front label for PB&J Craft Popcorn"
            src={PbjFrontLabel}
          />
        </Zoom>
        <Zoom
          overlayBgColorEnd={OVERLAY_BG_COLOR_END}
          overlayBgColorStart={OVERLAY_BG_COLOR_START}
          transitionDuration={ZOOM_TRANSITION_DURATION}
          wrapStyle={ZOOM_WRAP_STYLE}
          zoomMargin={ZOOM_ZOOM_MARGIN}
        >
          <StyledLabelImage
            alt="Back label for PB&J Craft Popcorn"
            src={PbjBackLabel}
          />
        </Zoom>
      </StyledProductImages>
      <StyledProductHeading>Habanero Ranch Craft Popcorn</StyledProductHeading>
      <StyledProductImages>
        <Zoom
          overlayBgColorEnd={OVERLAY_BG_COLOR_END}
          overlayBgColorStart={OVERLAY_BG_COLOR_START}
          transitionDuration={ZOOM_TRANSITION_DURATION}
          wrapStyle={ZOOM_WRAP_STYLE}
          zoomMargin={ZOOM_ZOOM_MARGIN}
        >
          <StyledLabelImage
            alt="Front label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchFrontLabel}
          />
        </Zoom>
        <Zoom
          overlayBgColorEnd={OVERLAY_BG_COLOR_END}
          overlayBgColorStart={OVERLAY_BG_COLOR_START}
          transitionDuration={ZOOM_TRANSITION_DURATION}
          wrapStyle={ZOOM_WRAP_STYLE}
          zoomMargin={ZOOM_ZOOM_MARGIN}
        >
          <StyledLabelImage
            alt="Back label for Habanero Ranch Craft Popcorn"
            src={HabaneroRanchBackLabel}
          />
        </Zoom>
      </StyledProductImages>
    </>
  );
}
