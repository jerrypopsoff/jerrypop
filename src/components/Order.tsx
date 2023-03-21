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

const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 86px auto;
  max-width: 600px;
  padding: 0 12px;
`;

const StyledSectionHeading = styled(Typography)`
  margin: 0;
`;

const StyledSectionTagline = styled(Typography)`
  margin: 24px 0;
`;

const StyledRetailerList = styled.ul`
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
  const {
    closeDialog: closeOrderFormDialog,
    isFormVisible: isOrderFormVisible,
    openDialog: openOrderFormDialog,
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
      {/* Comment the following when re-enabling orders. */}
      <Typography type="h1">Order</Typography>
      {/* Uncomment the following to re-enable orders. */}
      {/* <StyledSection>
        <StyledSectionHeading type="h1">Order</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Order Jerrypop for local pickup or shipping.
        </StyledSectionTagline>
        <StyledButton onClick={openOrderFormDialog}>Order</StyledButton>
      </StyledSection>
      <Typography margin="0 12px" type="h1">
        How else can I get Jerrypop?
      </Typography> */}
      <StyledSection>
        <StyledSectionHeading type="h2">Retail</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Purchase Jerrypop off the shelf at the following locations:
        </StyledSectionTagline>
        <StyledRetailerList>
          {RETAILERS.map((retailer) => (
            <RetailerListItem
              key={retailer.name}
              retailer={retailer}
            ></RetailerListItem>
          ))}
        </StyledRetailerList>
        <Typography margin="24px 0 0" type="p">
          Want to pop off at your business with locally handcrafted popcorn?{' '}
          <a
            href="mailto:info@jerrypop.com?subject=Jerrypop%20partnership%20inquiry"
            rel="noreferrer"
            target="_blank"
          >
            Reach out
          </a>{' '}
          about pop-ups, pairings, and retail partnerships.
        </Typography>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading type="h2">Catering</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Serve Jerrypop at your next event.
        </StyledSectionTagline>
        <StyledButton onClick={openCateringFormDialog}>
          Order catering
        </StyledButton>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading type="h2">Pop-ups</StyledSectionHeading>
        <StyledSectionTagline type="p">
          Catch my next pop-up.
        </StyledSectionTagline>
        <StyledLink
          href="https://www.instagram.com/craftpopcorn/"
          rel="noreferrer"
          target="_blank"
        >
          See announcements
        </StyledLink>
      </StyledSection>
      {isOrderFormVisible && (
        <FormDialog
          onCloseFormDialog={closeOrderFormDialog}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdXm4aTzZVHn5RIYhC1xLy-MNtyRxohuU2tZCH-TPnU8GqGHw/viewform?embedded=true"
          title="Jerrypop Order Form"
        />
      )}
      {isCateringFormVisible && (
        <FormDialog
          onCloseFormDialog={closeCateringFormDialog}
          src="https://docs.google.com/forms/d/e/1FAIpQLSckzswwrXnzRIOqxI5ktGX0r6DzhB0r16oGKiHvZ_aiFTMe8g/viewform?embedded=true"
          title="Jerrypop Catering Request Form"
        />
      )}
    </>
  );
};

export default Order;
