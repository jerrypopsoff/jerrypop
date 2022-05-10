import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
// import { RETAILERS } from '../constants/Retailers';
import PageSubHeading from './PageSubHeading';
import React from 'react';
import styled from 'styled-components';

const StyledPageContent = styled.div`
  margin: auto;
  max-width: 800px;
`;

export default function Purchase() {
  return (
    <StyledPageContent>
      <PageHeading>Purchase</PageHeading>
      <PageSubHeading>Retailers</PageSubHeading>
      <p>
        Jerrypop is not yet available for purchase from retailers. Interested in
        carrying Jerrypop at your retail location? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>!
      </p>
      {/* <p>Jerrypop is available for purchase from the following retailers:</p>
      <ul>
        {RETAILERS.map(retailer => (
          <li key={retailer.displayName}>{retailer.displayName}</li>
        ))}
      </ul> */}
      <PageSubHeading>Catering</PageSubHeading>
      <p>
        Interested in serving Jerrypop at your event? Reach out to us at{' '}
        <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>!
      </p>
      <NavigationMenu />
    </StyledPageContent>
  );
}
