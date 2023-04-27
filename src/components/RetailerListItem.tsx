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

const StyledDetail = styled(Typography)`
  font-size: 13px;
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
          <StyledDetail margin="0" type="p">
            {address}
          </StyledDetail>
          <StyledDetail margin="2px 0 0" type="p">
            {products.map(({ title }) => title).join(', ')}
          </StyledDetail>
        </StyledInformation>
      </StyledRetailerAnchor>
    </StyledListItem>
  );
};

export default RetailerListItem;
