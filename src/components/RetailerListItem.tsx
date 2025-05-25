import styled from 'styled-components';
import { CARD_OUTER_STYLE } from '../constants/css/card';
import { Retailer } from '../types/retailer';
import Heading3 from './common/Heading3';
import Paragraph from './common/Paragraph';
import Link from 'next/link';

const StyledListItem = styled.li`
  ${CARD_OUTER_STYLE}
  margin: 24px auto;
  max-width: 350px;
`;

const StyledRetailerAnchor = styled(Link)`
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

const StyledAddress = styled(Paragraph)`
  font-size: 13px;
  font-style: italic;
  margin: 0;
`;

const StyledProducts = styled(Paragraph)`
  font-size: 13px;
  margin: 4px 0 0;
`;

interface Props {
  retailer: Retailer;
}

const RetailerListItem = ({
  retailer: { address, href, name, products },
}: Props) => {
  return (
    <StyledListItem>
      <StyledRetailerAnchor href={href} rel="noreferrer" target="_blank">
        <StyledInformation>
          <Heading3>{name}</Heading3>
          <StyledAddress>{address}</StyledAddress>
          <StyledProducts>
            {products.map(({ title }) => title).join(', ')}
          </StyledProducts>
        </StyledInformation>
      </StyledRetailerAnchor>
    </StyledListItem>
  );
};

export default RetailerListItem;
