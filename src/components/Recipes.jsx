import BackgroundWordmark from './BackgroundWordmark';
import NavigationMenu from './NavigationMenu';
import { RECIPES } from '../constants/jerry';
import React from 'react';
import Recipe from './Recipe';
import { THEMES } from '../constants/theme';
import Typography from './Typography';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

function getRecipeTheme(currentTheme, recipeIndex) {
  const otherThemes = THEMES.filter(theme => theme !== currentTheme);
  return otherThemes[recipeIndex % otherThemes.length];
}

export default function Recipes({ theme: currentTheme }) {
  return (
    <>
      <BackgroundWordmark
        fillColor={currentTheme.mainThemeMedium}
        isCentered={true}
        repeat={4}
      />
      <Typography type="h1">Recipes</Typography>
      <StyledUnorderedList>
        {RECIPES.map((recipe, index) => {
          const recipeTheme = getRecipeTheme(currentTheme, index);
          return (
            <Recipe key={recipe.title} recipe={recipe} theme={recipeTheme} />
          );
        })}
      </StyledUnorderedList>
      <NavigationMenu />
    </>
  );
}
