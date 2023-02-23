import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OrderFormDialog from './OrderFormDialog';
import Typography from './Typography';
import styled from 'styled-components';
import { RETAILERS } from '../constants/retailers';
import RetailerListItem from './RetailerListItem';
import { BUTTON_STYLE } from '../constants/css/button';
import RequestCateringDialog from './RequestCateringDialog';
import GlamorPhotograph from './GlamorPhotograph';
import JalapenoCheddar600 from '../images/glamorous-jalapeno-cheddar-600.jpeg';
import JalapenoCheddar1200 from '../images/glamorous-jalapeno-cheddar-1200.jpeg';
import JalapenoCheddar2400 from '../images/glamorous-jalapeno-cheddar-2400.jpeg';
import JalapenoCheddarWebp600 from '../images/glamorous-jalapeno-cheddar-600.webp';
import JalapenoCheddarWebp1200 from '../images/glamorous-jalapeno-cheddar-1200.webp';
import JalapenoCheddarWebp2400 from '../images/glamorous-jalapeno-cheddar-2400.webp';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledRetailerList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  ${BUTTON_STYLE}
  margin: 12px 0;
`;

const StyledLink = styled.a`
  ${BUTTON_STYLE}
  margin: 12px 0;
`;

const Order: React.FC = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [isCateringFormVisible, setIsCateringFormVisible] = useState(false);

  const onOrderOnlineKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onCloseOrderOnlineDialog();
    }
  };

  const onCloseOrderOnlineDialog = () => {
    setIsOrderFormVisible(false);
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', onOrderOnlineKeyDown);
  };

  const onClickOrderOnline = () => {
    setIsOrderFormVisible(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onOrderOnlineKeyDown);
  };

  const onRequestCateringKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onCloseRequestCateringDialog();
    }
  };

  const onCloseRequestCateringDialog = () => {
    setIsCateringFormVisible(false);
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', onRequestCateringKeyDown);
  };

  const onClickRequestCatering = () => {
    setIsCateringFormVisible(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onRequestCateringKeyDown);
  };

  return (
    <>
      <Helmet>
        <title>Order · Jerrypop</title>
      </Helmet>
      <StyledPageContent>
        <GlamorPhotograph
          alt="Photograph of a bowl of Jalapeño Cheddar Craft Popcorn on a wooden surface from directly above"
          aspectRatio={2400 / 1350}
          fallbackSrc={JalapenoCheddar2400}
          fallbackSrcSet={`${JalapenoCheddar600} 600w, ${JalapenoCheddar1200} 1200w, ${JalapenoCheddar2400} 2400w`}
          srcSet={`${JalapenoCheddarWebp600} 600w, ${JalapenoCheddarWebp1200} 1200w, ${JalapenoCheddarWebp2400} 2400w`}
        />
        <Typography type="h1">Order</Typography>
        <Typography maxWidth="600px" type="p">
          Order Jerrypop for local pickup or shipping.
        </Typography>
        <StyledButton onClick={onClickOrderOnline}>Order</StyledButton>
        <Typography type="h1">How else can I get Jerrypop?</Typography>
        <Typography type="h2">Retail</Typography>
        <Typography maxWidth="600px" type="p">
          Purchase Jerrypop off the shelf at the following locations:
        </Typography>
        <StyledRetailerList>
          {RETAILERS.map((retailer) => (
            <RetailerListItem
              key={retailer.name}
              retailer={retailer}
            ></RetailerListItem>
          ))}
        </StyledRetailerList>
        <Typography maxWidth="600px" type="p">
          Want to pop off at your brewery or retail location with locally
          handcrafted popcorn? Reach out to{' '}
          <a href="mailto:info@jerrypop.com">info@jerrypop.com</a> for pop-ups,
          pairings, and retail partnerships.
        </Typography>
        <Typography margin="78px 12px 12px" type="h2">
          Pop-ups
        </Typography>
        <Typography maxWidth="600px" type="p">
          Catch my next pop-up.
        </Typography>
        <StyledLink
          href="https://www.instagram.com/craftpopcorn/"
          rel="noreferrer"
          target="_blank"
        >
          See announcements
        </StyledLink>
        <Typography margin="78px 12px 12px" type="h2">
          Catering
        </Typography>
        <Typography maxWidth="600px" type="p">
          Serve Jerrypop at your event.
        </Typography>
        <StyledButton onClick={onClickRequestCatering}>
          Request catering
        </StyledButton>
        {isOrderFormVisible && (
          <OrderFormDialog
            onCloseOrderOnlineDialog={onCloseOrderOnlineDialog}
          />
        )}
        {isCateringFormVisible && (
          <RequestCateringDialog onCloseDialog={onCloseRequestCateringDialog} />
        )}
      </StyledPageContent>
    </>
  );
};

export default Order;
