import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { IngredientDetails } from '../types/ingredients';
import { CARD_INNER_STYLE, CARD_OUTER_STYLE } from '../constants/css/card';

const StyledCard = styled.li`
  ${CARD_OUTER_STYLE}
`;

const StyledInnerCard = styled.div`
  ${CARD_INNER_STYLE}
`;

const StyledTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
`;

const StyledContent = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  text-transform: uppercase;
`;

interface Props {
  ingredientDetails: IngredientDetails;
}

const IngredientDetailsCard: React.FC<Props> = ({ ingredientDetails }) => {
  return (
    <StyledCard>
      <StyledInnerCard>
        <StyledTitle hasTextShadow={false} margin="0" type="h3">
          {ingredientDetails.title}
        </StyledTitle>
        <StyledContent hasTextShadow={false} margin="24px 0 16px" type="p">
          <b>Ingredients:</b> {ingredientDetails.ingredients.join(', ')}
        </StyledContent>
        {ingredientDetails.allergens.length ? (
          <StyledContent hasTextShadow={false} margin="16px 0 0" type="p">
            <b>Contains:</b> {ingredientDetails.allergens.join(', ')}
          </StyledContent>
        ) : null}
      </StyledInnerCard>
    </StyledCard>
  );
};

export default IngredientDetailsCard;
