import NavigationMenu from './NavigationMenu';
import { RECIPES } from '../constants/jerry';
import React from 'react';
import Recipe from './Recipe';
import Typography from './Typography';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Recipes: React.FC = () => {
  return (
    <>
      <Typography type="h1">Recipes</Typography>
      <Typography margin="12px 12px 24px" type="p">
        Select a recipe to view details.
      </Typography>
      <StyledUnorderedList>
        {RECIPES.map((recipe) => {
          return <Recipe key={recipe.title} recipe={recipe} />;
        })}
      </StyledUnorderedList>
      <NavigationMenu />
    </>
  );
};

export default Recipes;
