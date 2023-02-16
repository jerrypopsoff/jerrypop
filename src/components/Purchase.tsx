import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import OrderFormDialog from './OrderFormDialog';
import Products from './Products';
import Typography from './Typography';
import styled from 'styled-components';
import { RETAILERS } from '../constants/retailers';
import { Retailer } from '../types/retailer';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledRetailersList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledRetailersListItem = styled.li`
  margin: 12px 0;
`;

const StyledRetailerName = styled.a`
  font-size: 28px;
`;

const StyledRetailerDescription = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 4px;
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
        <Typography type="h2">Retail</Typography>
        <Typography maxWidth="600px" type="p">
          Jerrypop is available for purchase at the following locations:
        </Typography>
        <StyledRetailersList>
          {RETAILERS.map(({ address, href, name }: Retailer) => (
            <StyledRetailersListItem>
              <StyledRetailerName
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {name}
              </StyledRetailerName>
              <StyledRetailerDescription>{address}</StyledRetailerDescription>
            </StyledRetailersListItem>
          ))}
        </StyledRetailersList>
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
        <Typography type="h2">Online</Typography>
        <Products onClickOrderOnline={onClickOrderOnline} />
        {isOrderFormVisible && (
          <OrderFormDialog
            onCloseOrderOnlineDialog={onCloseOrderOnlineDialog}
          />
        )}
        <StyledNavigationMenu />
      </StyledPageContent>
    </>
  );
};

export default Purchase;
