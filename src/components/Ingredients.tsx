import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { INGREDIENTS } from '../constants/ingredients';
import IngredientDetailsCard from './IngredientDetailsCard';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Ingredients: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ingredients · Jerrypop</title>
      </Helmet>
      <Typography type="h1">Ingredients</Typography>
      <StyledUnorderedList>
        {INGREDIENTS.map((ingredientDetails) => {
          return (
            <IngredientDetailsCard
              key={ingredientDetails.title}
              ingredientDetails={ingredientDetails}
            />
          );
        })}
      </StyledUnorderedList>
      <NavigationMenu />
    </>
  );
};

export default Ingredients;
