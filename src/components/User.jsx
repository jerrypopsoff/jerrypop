import '../styles/User.scss';
import InteractiveLink from './InteractiveLink';
import { RECIPES } from '../constants/Jerry';
import React from 'react';
import Recipe from './Recipe';

export default function User() {
  return (
    <div>
      <InteractiveLink
        className="user__home-link"
        defaultText="🍿 Home 🍿"
        interactiveText="💥 Home 💥"
        to="/"
      />
      <ul className="user__list">
        {RECIPES.map(recipe => (
          <li key={recipe.title}>
            <Recipe recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
