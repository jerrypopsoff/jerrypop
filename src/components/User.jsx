import InteractiveLink from './InteractiveLink';
import { RECIPES } from '../constants/Jerry';
import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

const StyledInteractiveLink = styled(InteractiveLink)`
  display: inline-block;
  margin: 20px auto 0;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

export default function User() {
  return (
    <div>
      <StyledInteractiveLink
        defaultText="🍿 Home 🍿"
        interactiveText="💥 Home 💥"
        to="/"
      />
      <StyledList>
        {RECIPES.map(recipe => (
          <li key={recipe.title}>
            <Recipe recipe={recipe} />
          </li>
        ))}
      </StyledList>
    </div>
  );
}
