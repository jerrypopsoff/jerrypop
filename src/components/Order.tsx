import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OrderFormDialog from './OrderFormDialog';
import Typography from './Typography';
import styled from 'styled-components';
import { RETAILERS } from '../constants/retailers';
import RetailerListItem from './RetailerListItem';
import { BUTTON_STYLE, BUTTON_INNER_STYLE } from '../constants/css/button';
import { DANGLE_STYLE } from '../constants/css/rotation';
import { PULSE_STYLE } from '../constants/css/pulse';
import RequestCateringDialog from './RequestCateringDialog';
import GlamorPhotograph from './GlamorPhotograph';
import JalapenoCheddarJpeg600 from '../images/glamorous-jalapeno-cheddar-600.jpeg';
import JalapenoCheddarJpeg1200 from '../images/glamorous-jalapeno-cheddar-1200.jpeg';
import JalapenoCheddarJpeg2400 from '../images/glamorous-jalapeno-cheddar-2400.jpeg';
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
  padding: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  ${BUTTON_STYLE}
  ${PULSE_STYLE}
  margin: 12px 0;

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
  }
`;

const StyledInnerButton = styled.div`
  ${BUTTON_INNER_STYLE}
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
          fallbackSrc={JalapenoCheddarJpeg2400}
          fallbackSrcSet={`${JalapenoCheddarJpeg600} 600w, ${JalapenoCheddarJpeg1200} 1200w, ${JalapenoCheddarJpeg2400} 2400w`}
          maxHeightPx={450}
          srcSet={`${JalapenoCheddarWebp600} 600w, ${JalapenoCheddarWebp1200} 1200w, ${JalapenoCheddarWebp2400} 2400w`}
        />
        <Typography type="h1">Order</Typography>
        <Typography maxWidth="600px" type="p">
          Order Jerrypop for local pickup or shipping.
        </Typography>
        <StyledButton onClick={onClickOrderOnline}>
          <StyledInnerButton>Order</StyledInnerButton>
        </StyledButton>
        <Typography type="h2">Catering</Typography>
        <Typography maxWidth="600px" type="p">
          Serve Jerrypop at your event.
        </Typography>
        <StyledButton onClick={onClickRequestCatering}>
          <StyledInnerButton>Request catering</StyledInnerButton>
        </StyledButton>
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
