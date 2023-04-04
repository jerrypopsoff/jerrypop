import React from 'react';
import styled from 'styled-components';
import { CARD_OUTER_STYLE } from '../constants/css/card';
import { Retailer } from '../types/retailer';
import Typography from './Typography';

const StyledListItem = styled.li`
  ${CARD_OUTER_STYLE}
  margin: 24px auto;
`;

const StyledRetailerAnchor = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-decoration: none;
`;

const StyledInformation = styled.div`
  text-align: center;
`;

interface Props {
  retailer: Retailer;
}

const RetailerListItem: React.FC<Props> = ({
  retailer: { address, href, name },
}) => {
  return (
    <StyledListItem>
      <StyledRetailerAnchor href={href} rel="noreferrer" target="_blank">
        <StyledInformation>
          <Typography margin="0 0 4px" type="h3">
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
