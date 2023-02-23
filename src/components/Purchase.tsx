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

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledRetailerList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledOrderOnlineButton = styled.button`
  ${BUTTON_STYLE}
  ${PULSE_STYLE}
  margin: 12px 0;

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
  }
`;

const StyledInnerOrderOnlineButton = styled.div`
  ${BUTTON_INNER_STYLE}
`;

const Purchase: React.FC = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onCloseOrderOnlineDialog();
    }
  };

  const onCloseOrderOnlineDialog = () => {
    setIsOrderFormVisible(false);
    document.body.style.overflow = 'unset';
    window.removeEventListener('keydown', onKeyDown);
  };

  const onClickOrderOnline = () => {
    setIsOrderFormVisible(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
  };

  return (
    <>
      <Helmet>
        <title>Purchase · Jerrypop</title>
      </Helmet>
      <StyledPageContent>
        <Typography type="h1">Purchase</Typography>
        <Typography type="h2">Order</Typography>
        <StyledOrderOnlineButton onClick={onClickOrderOnline}>
          <StyledInnerOrderOnlineButton>Order</StyledInnerOrderOnlineButton>
        </StyledOrderOnlineButton>
        <Typography type="h2">Retail</Typography>
        <Typography maxWidth="600px" type="p">
          Jerrypop is available for purchase at the following locations:
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
        <Typography type="h2">Catering</Typography>
        <Typography maxWidth="600px" type="p">
          Interested in serving locally handcrafted popcorn at your event? Reach
          out to <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
        </Typography>
        {isOrderFormVisible && (
          <OrderFormDialog
            onCloseOrderOnlineDialog={onCloseOrderOnlineDialog}
          />
        )}
      </StyledPageContent>
    </>
  );
};

export default Purchase;
