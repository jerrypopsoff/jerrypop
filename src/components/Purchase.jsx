import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
// import { RETAILERS } from '../constants/Retailers';
import PageSubHeading from './PageSubHeading';
import React from 'react';
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

export default function Purchase() {
  return (
    <StyledPageContent>
      <PageHeading>Purchase</PageHeading>
      <PageSubHeading>Retailers</PageSubHeading>
      <StyledParagraph>
        Jerrypop is not yet available for purchase from retailers. Interested in
        carrying Jerrypop at your retail location? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>!
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
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>!
      </StyledParagraph>
      <StyledNavigationMenu />
    </StyledPageContent>
  );
}
