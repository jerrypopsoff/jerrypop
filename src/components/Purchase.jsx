import React, { useState } from 'react';
import BackgroundWordmark from './BackgroundWordmark';
import NavigationMenu from './NavigationMenu';
import OrderFormDialog from './OrderFormDialog';
// import { RETAILERS } from '../constants/Retailers';
import Products from './Products';
import Typography from './Typography';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import { pulse } from '../constants/css/pulse';
import styled from 'styled-components';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledNavigationMenu = styled(NavigationMenu)`
  margin-top: 48px;
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

export default function Purchase({ theme }) {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  const onKeyDown = ({ key }) => {
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
    <StyledPageContent>
      <BackgroundWordmark
        fillColor={theme.mainThemeMedium}
        isCentered={true}
        repeat={1}
      />
      <Typography type="h1">Purchase</Typography>
      <StyledOrderOnlineButton onClick={onClickOrderOnline}>
        Order online
      </StyledOrderOnlineButton>
      <Typography type="h2">Products</Typography>
      <Products />
      {isOrderFormVisible && (
        <OrderFormDialog onCloseOrderOnlineDialog={onCloseOrderOnlineDialog} />
      )}
      <Typography type="h2">Retail</Typography>
      <Typography maxWidth="600px" type="p">
        Jerrypop is not yet available for purchase from retailers. Interested in
        carrying Jerrypop at your retail location? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
      </Typography>
      {/* <p>Jerrypop is available for purchase from the following retailers:</p>
      <ul>
        {RETAILERS.map(retailer => (
          <li key={retailer.displayName}>{retailer.displayName}</li>
        ))}
      </ul> */}
      <Typography type="h2">Catering</Typography>
      <Typography maxWidth="600px" type="p">
        Interested in serving Jerrypop at your event? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>. Please include
        your full name, location and date of the event, and estimated number of
        guests. Expect a response within three business days.
      </Typography>
      <StyledNavigationMenu />
    </StyledPageContent>
  );
}
