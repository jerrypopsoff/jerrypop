import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import HabaneroRanch600 from '../images/glamorous-habanero-ranch-600.jpeg';
import HabaneroRanch1200 from '../images/glamorous-habanero-ranch-1200.jpeg';
import HabaneroRanch2400 from '../images/glamorous-habanero-ranch-2400.jpeg';
import HabaneroRanchWebp600 from '../images/glamorous-habanero-ranch-600.webp';
import HabaneroRanchWebp1200 from '../images/glamorous-habanero-ranch-1200.webp';
import HabaneroRanchWebp2400 from '../images/glamorous-habanero-ranch-2400.webp';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/css/tile-list';
import PressArticles from './PressArticles';
import { TILE_LIST_DIVIDER_STYLE } from '../constants/css/tile-list';
import { BUTTON_STYLE } from '../constants/css/button';
import FormDialog from './FormDialog';
import {
  RETAIL_ORDER_FORM_SRC,
  RETAIL_ORDER_FORM_TITLE,
} from '../constants/form';
import { useDialogState } from '../hooks/use-form-dialog';
import { Link } from 'react-router-dom';

const POP_UP_REQUEST_EMAIL_SUBJECT = 'Jerrypop pop-up request';
const POP_UP_REQUEST_EMAIL_BODY =
  "Hi Jerrypop,\n\nI'd like for you to pop up at [my event] at [location] on [date] from [time range]. Are you available?\n\nThanks,\n[name]";

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 48px auto;
  padding: 0 12px;
`;

const StyledLink = styled(Link)`
  ${BUTTON_STYLE}
`;

const StyledDivider = styled.div`
  ${TILE_LIST_DIVIDER_STYLE}
`;

const Home: React.FC = () => {
  const {
    closeDialog: closeRetailFormDialog,
    isFormVisible: isRetailFormVisible,
    openDialog: openRetailFormDialog,
  } = useDialogState();

  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <GlamorPhotograph
          alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
          aspectRatio={17 / 10}
          fallbackSrc={HabaneroRanch2400}
          fallbackSrcSet={`${HabaneroRanch600} 600w, ${HabaneroRanch1200} 1200w, ${HabaneroRanch2400} 2400w`}
          srcSet={`${HabaneroRanchWebp600} 600w, ${HabaneroRanchWebp1200} 1200w, ${HabaneroRanchWebp2400} 2400w`}
        />
        <StyledSection>
          <Typography margin="12px" type="h1">
            Catering
          </Typography>
          <Typography type="p">
            Place a wholesale pickup order to make your space or event
            unforgettable.
          </Typography>
          <StyledLink to="/catering">Order catering</StyledLink>
        </StyledSection>
        <StyledSection>
          <Typography margin="12px" type="h1">
            Pop-ups
          </Typography>
          <Typography type="p">
            Catch my next pop-up or{' '}
            <a
              href={`mailto:info@jerrypop.com?subject=${encodeURIComponent(
                POP_UP_REQUEST_EMAIL_SUBJECT,
              )}&body=${encodeURIComponent(POP_UP_REQUEST_EMAIL_BODY)}`}
              rel="noreferrer"
              target="_blank"
            >
              request a pop-up
            </a>{' '}
            at your event.
          </Typography>
          <StyledLink
            rel="noreferrer"
            target="_blank"
            to="https://www.instagram.com/craftpopcorn/"
          >
            See announcements
          </StyledLink>
        </StyledSection>
        <StyledDivider
          aria-hidden={true}
          $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
          $margin="24px 0"
        />
        <Typography type="h1">Press</Typography>
        <PressArticles />
      </StyledHome>
      {isRetailFormVisible && (
        <FormDialog
          onCloseFormDialog={closeRetailFormDialog}
          src={RETAIL_ORDER_FORM_SRC}
          title={RETAIL_ORDER_FORM_TITLE}
        />
      )}
    </>
  );
};

export default Home;
