import React from 'react';
import styled from 'styled-components';
import { CARD_OUTER_STYLE } from '../constants/css/card';
import { Retailer } from '../types/retailer';
import Typography from './Typography';

const StyledListItem = styled.li`
  ${CARD_OUTER_STYLE}
`;

const StyledRetailerAnchor = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-decoration: none;
`;

const StyledPhotograph = styled.img`
  height: 200px;
  width: 200px;
`;

const StyledInformation = styled.div`
  margin: 16px 0 0;
  text-align: center;
`;

interface Props {
  retailer: Retailer;
}

const RetailerListItem: React.FC<Props> = ({
  retailer: { address, href, name, photograph },
}) => {
  return (
    <StyledListItem>
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
          <Typography margin="0" type="p">
            {address}
          </Typography>
        </StyledInformation>
      </StyledRetailerAnchor>
    </StyledListItem>
  );
};

export default RetailerListItem;
