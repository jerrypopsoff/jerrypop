import {
  StyledInteractiveLink,
  StyledUnorderedList,
} from '../styled-components/User';
import { RECIPES } from '../constants/Jerry';
import React from 'react';
import Recipe from './Recipe';

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
