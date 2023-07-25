import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import styled from 'styled-components';
import { RETAILERS } from '../constants/retailers';
import RetailerListItem from './RetailerListItem';
import { BUTTON_STYLE } from '../constants/css/button';
import GlamorPhotograph from './GlamorPhotograph';
import JalapenoCheddar600 from '../images/glamorous-jalapeno-cheddar-600.jpeg';
import JalapenoCheddar1200 from '../images/glamorous-jalapeno-cheddar-1200.jpeg';
import JalapenoCheddar2400 from '../images/glamorous-jalapeno-cheddar-2400.jpeg';
import JalapenoCheddarWebp600 from '../images/glamorous-jalapeno-cheddar-600.webp';
import JalapenoCheddarWebp1200 from '../images/glamorous-jalapeno-cheddar-1200.webp';
import JalapenoCheddarWebp2400 from '../images/glamorous-jalapeno-cheddar-2400.webp';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-form-dialog';
import {
  CATERING_ORDER_FORM_SRC,
  CATERING_ORDER_FORM_TITLE,
  RETAIL_ORDER_FORM_SRC,
  RETAIL_ORDER_FORM_TITLE,
} from '../constants/form';
import { Link } from 'react-router-dom';

const POP_UP_REQUEST_EMAIL_SUBJECT = 'Jerrypop pop-up request';
const POP_UP_REQUEST_EMAIL_BODY =
  "Hi Jerrypop,\n\nI'd like for you to pop up at [my event] at [location] on [date] from [time range]. Are you available?\n\nThanks,\n[name]";

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 86px auto;
  padding: 0 12px;

  &:first-of-type {
    margin-top: 48px;
  }
`;

const StyledSectionHeading = styled(Typography)`
  margin: 0;
`;

const StyledSectionTagline = styled(Typography)`
  margin: 24px 0;
`;

const StyledRetailerList = styled.ul`
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin: -12px 0;
  padding: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  ${BUTTON_STYLE}
  margin: 0;
`;

const StyledLink = styled.a`
  ${BUTTON_STYLE}
  margin: 0;
`;

const Order: React.FC = () => {
  // const {
  //   closeDialog: closeOrderFormDialog,
  //   isFormVisible: isOrderFormVisible,
  //   openDialog: openOrderFormDialog,
  // } = useDialogState();

  const {
    closeDialog: closeRetailFormDialog,
    isFormVisible: isRetailFormVisible,
    openDialog: openRetailFormDialog,
  } = useDialogState();

  const {
    closeDialog: closeCateringFormDialog,
    isFormVisible: isCateringFormVisible,
    openDialog: openCateringFormDialog,
  } = useDialogState();

  return (
    <>
      <Helmet>
        <title>Order · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of a bowl of Jalapeño Cheddar Craft Popcorn on a wooden surface from directly above"
        aspectRatio={2400 / 1350}
        fallbackSrc={JalapenoCheddar2400}
        fallbackSrcSet={`${JalapenoCheddar600} 600w, ${JalapenoCheddar1200} 1200w, ${JalapenoCheddar2400} 2400w`}
        srcSet={`${JalapenoCheddarWebp600} 600w, ${JalapenoCheddarWebp1200} 1200w, ${JalapenoCheddarWebp2400} 2400w`}
      />
      <Typography type="h1">Order</Typography>
      <StyledSection>
        <StyledSectionTagline maxWidth="600px" type="p">
          Direct orders are coming soon! Follow me on{' '}
          <a
            href="https://www.instagram.com/craftpopcorn/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>{' '}
          or{' '}
          <a
            href="https://www.facebook.com/craftpopcorn/"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>{' '}
          to be the first to know when you can order directly.
        </StyledSectionTagline>
      </StyledSection>
      <Typography margin="0 12px" type="h1">
        How else can I get Jerrypop?
      </Typography>
      <StyledSection>
        <StyledSectionHeading type="h2">Retail</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Purchase Jerrypop off the shelf at the following locations:
        </StyledSectionTagline>
        <StyledRetailerList>
          {RETAILERS.map((retailer) => (
            <RetailerListItem
              key={retailer.address}
              retailer={retailer}
            ></RetailerListItem>
          ))}
        </StyledRetailerList>
        <Typography margin="24px 0" type="p">
          Want to carry locally crafted popcorn at your business?
        </Typography>
        <StyledButton onClick={openRetailFormDialog}>Order retail</StyledButton>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading type="h2">Catering</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Serve Jerrypop at your next event.{' '}
          <Link to="/catering">See pricing</Link>.
        </StyledSectionTagline>
        <StyledButton onClick={openCateringFormDialog}>
          Order catering
        </StyledButton>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading type="h2">Pop-ups</StyledSectionHeading>
        <StyledSectionTagline type="p">
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
        </StyledSectionTagline>
        <StyledLink
          href="https://www.instagram.com/craftpopcorn/"
          rel="noreferrer"
          target="_blank"
        >
          See announcements
        </StyledLink>
      </StyledSection>
      {/* {isOrderFormVisible && (
        <FormDialog
          onCloseFormDialog={closeOrderFormDialog}
          src={DIRECT_ORDER_FORM_SRC}
          title={DIRECT_ORDER_FORM_TITLE}
        />
      )} */}
      {isRetailFormVisible && (
        <FormDialog
          onCloseFormDialog={closeRetailFormDialog}
          src={RETAIL_ORDER_FORM_SRC}
          title={RETAIL_ORDER_FORM_TITLE}
        />
      )}
      {isCateringFormVisible && (
        <FormDialog
          onCloseFormDialog={closeCateringFormDialog}
          src={CATERING_ORDER_FORM_SRC}
          title={CATERING_ORDER_FORM_TITLE}
        />
      )}
    </>
  );
};

export default Order;
