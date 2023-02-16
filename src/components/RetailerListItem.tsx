import React from 'react';
import styled from 'styled-components';
import { Retailer } from '../types/retailer';
import Typography from './Typography';

const BREAKPOINT_WIDTH = '475px';

const StyledRetailerAnchor = styled.a`
  align-items: center;
  display: flex;
  margin: 12px 0;
  text-decoration: none;

  @media (max-width: ${BREAKPOINT_WIDTH}) {
    flex-direction: column;
  }
`;

const StyledPhotograph = styled.img`
  height: 200px;
  width: 200px;
`;

const StyledInformation = styled.div`
  margin: 0 0 0 32px;
  text-align: left;

  @media (max-width: ${BREAKPOINT_WIDTH}) {
    margin: 16px 0 0 0;
    text-align: center;
  }
`;

const StyledDescription = styled.span`
  display: block;
  font-size: 14px;
`;

interface Props {
  retailer: Retailer;
}

const RetailerListItem: React.FC<Props> = ({
  retailer: { address, href, name, photograph },
}) => {
  return (
    <li>
      <StyledRetailerAnchor
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StyledPhotograph alt={`Photograph of ${name}`} src={photograph} />
        <StyledInformation>
          <Typography margin="4px 0" type="h3">
            {name}
          </Typography>
          <StyledDescription>{address}</StyledDescription>
        </StyledInformation>
      </StyledRetailerAnchor>
    </li>
  );
};

export default RetailerListItem;
