import InteractiveLink from './InteractiveLink';
import { RECIPES } from '../constants/Jerry';
import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';

const StyledInteractiveLink = styled(InteractiveLink)`
  display: inline-block;
  margin: 12px auto 0;
`;

const StyledUnorderedList = styled.ul`
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
      <StyledUnorderedList>
        {RECIPES.map(recipe => (
          <li key={recipe.title}>
            <Recipe recipe={recipe} />
          </li>
        ))}
      </StyledUnorderedList>
    </div>
  );
}
