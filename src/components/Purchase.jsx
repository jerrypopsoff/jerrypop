import React, { useState } from 'react';
import BackgroundWordmark from './BackgroundWordmark';
import NavigationMenu from './NavigationMenu';
import OrderFormDialog from './OrderFormDialog';
// import { RETAILERS } from '../constants/Retailers';
import Products from './Products';
import Typography from './Typography';
import styled from 'styled-components';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledNavigationMenu = styled(NavigationMenu)`
  margin-top: 48px;
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
      <Products onClickOrderOnline={onClickOrderOnline} />
      {isOrderFormVisible && (
        <OrderFormDialog onCloseOrderOnlineDialog={onCloseOrderOnlineDialog} />
      )}
      <Typography type="h2">Retail</Typography>
      <Typography maxWidth="600px" type="p">
        My products are not yet available for purchase from retailers.
        Interested in carrying them at your retail location? Reach out to{' '}
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
        Interested in serving craft popcorn at your event? Reach out to{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
      </Typography>
      <StyledNavigationMenu />
    </StyledPageContent>
  );
}
