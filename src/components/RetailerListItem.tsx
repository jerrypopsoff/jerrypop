import React from 'react';
import styled from 'styled-components';
import { CARD_OUTER_STYLE } from '../constants/css/card';
import { Retailer } from '../types/retailer';
import Typography from './Typography';

const StyledListItem = styled.li`
  ${CARD_OUTER_STYLE}
  margin: 24px auto;
  max-width: 350px;
`;

const StyledRetailerAnchor = styled.a`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 8px;
  text-decoration: none;
`;

const StyledInformation = styled.div`
  text-align: center;
`;

const StyledAddress = styled(Typography)`
  font-size: 13px;
  font-style: italic;
  margin: 0;
`;

const StyledProducts = styled(Typography)`
  font-size: 13px;
  margin: 4px 0 0;
`;

interface Props {
  retailer: Retailer;
}

const RetailerListItem: React.FC<Props> = ({
  retailer: { address, href, name, products },
}) => {
  return (
    <StyledListItem>
      <StyledRetailerAnchor href={href} rel="noreferrer" target="_blank">
        <StyledInformation>
          <Typography margin="0 0 4px" type="h3">
            {name}
          </Typography>
          <StyledAddress type="p">{address}</StyledAddress>
          <StyledProducts type="p">
            {products.map(({ title }) => title).join(', ')}
          </StyledProducts>
        </StyledInformation>
      </StyledRetailerAnchor>
    </StyledListItem>
  );
};

export default RetailerListItem;
