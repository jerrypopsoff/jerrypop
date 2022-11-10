import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import OrderFormDialog from './OrderFormDialog';
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
        <Products onClickOrderOnline={onClickOrderOnline} />
        {isOrderFormVisible && (
          <OrderFormDialog
            onCloseOrderOnlineDialog={onCloseOrderOnlineDialog}
          />
        )}
        <Typography type="h2">Catering</Typography>
        <Typography maxWidth="600px" type="p">
          Interested in serving locally handcrafted popcorn at your event? Reach
          out to <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
        </Typography>
        <StyledNavigationMenu />
      </StyledPageContent>
    </>
  );
};

export default Purchase;
