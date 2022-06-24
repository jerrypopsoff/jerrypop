import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import OrderFormDialog from './OrderFormDialog';
import PageHeading from './PageHeading';
// import { RETAILERS } from '../constants/Retailers';
import PageSubHeading from './PageSubHeading';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import { pulse } from '../constants/css/pulse';
import styled from 'styled-components';

const StyledPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 12px;
  max-width: 600px;
`;

const StyledNavigationMenu = styled(NavigationMenu)`
  margin-top: 48px;
`;

const StyledOrderOnlineButton = styled.button`
  ${buttonStyle}
  ${pulse}

  &:hover,
  &:focus {
    ${dangleRotation}
  }
`;

export default function Purchase() {
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
      <PageHeading>Purchase</PageHeading>
      <StyledOrderOnlineButton onClick={onClickOrderOnline}>
        Order online
      </StyledOrderOnlineButton>
      {isOrderFormVisible && (
        <OrderFormDialog onCloseOrderOnlineDialog={onCloseOrderOnlineDialog} />
      )}
      <PageSubHeading>Retail</PageSubHeading>
      <StyledParagraph>
        Jerrypop is not yet available for purchase from retailers. Interested in
        carrying Jerrypop at your retail location? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
      </StyledParagraph>
      {/* <p>Jerrypop is available for purchase from the following retailers:</p>
      <ul>
        {RETAILERS.map(retailer => (
          <li key={retailer.displayName}>{retailer.displayName}</li>
        ))}
      </ul> */}
      <PageSubHeading>Catering</PageSubHeading>
      <StyledParagraph>
        Interested in serving Jerrypop at your event? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>. Please include
        your full name, location and date of the event, and estimated number of
        guests. Expect a response within three business days.
      </StyledParagraph>
      <StyledNavigationMenu />
    </StyledPageContent>
  );
}
