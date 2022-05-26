import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
import { RECIPES } from '../constants/jerry';
import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

export default function Recipes() {
  return (
    <div>
      <PageHeading>Recipes</PageHeading>
      <p>Select a recipe to view details.</p>
      <StyledUnorderedList>
        {RECIPES.map(recipe => (
          <li key={recipe.title}>
            <Recipe recipe={recipe} />
          </li>
        ))}
      </StyledUnorderedList>
      <NavigationMenu />
    </div>
  );
}
