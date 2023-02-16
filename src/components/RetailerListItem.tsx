import React from 'react';
import styled from 'styled-components';
import { LIGHT_HIGHLIGHT_BACKGROUND, WHITE } from '../constants/color';
import { DANGLE_STYLE } from '../constants/css/rotation';
import { Retailer } from '../types/retailer';
import Typography from './Typography';

const BREAKPOINT_WIDTH = '475px';

const StyledRetailerAnchor = styled.a`
  align-items: center;
  border-radius: 5px;
  display: flex;
  margin: 4px 0;
  padding: 16px;
  text-decoration: none;

  @media (max-width: ${BREAKPOINT_WIDTH}) {
    flex-direction: column;
  }

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
    background-color: ${LIGHT_HIGHLIGHT_BACKGROUND};
    color: ${WHITE};
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
