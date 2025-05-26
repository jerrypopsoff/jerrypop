'use client';

import { RECIPES } from '../constants/recipe';
import Recipe from './Recipe';
import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';
import styled from 'styled-components';
import PageHeaderPhotographSrc from '../images/glamorous-pbj-sheet.jpeg';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';

const StyledRecipes = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Recipes = () => {
  return (
    <StyledRecipes>
      <PageHeaderPhotograph
        alt="Photograph of PB&J Craft Popcorn spread onto a baking sheet"
        aspectRatioCss="4032 / 3024"
        src={PageHeaderPhotographSrc}
      />
      <Heading1>Recipes</Heading1>
      <Paragraph>Select a recipe to view details.</Paragraph>
      <StyledUnorderedList>
        {RECIPES.map((recipe) => {
          return <Recipe key={recipe.title} recipe={recipe} />;
        })}
      </StyledUnorderedList>
    </StyledRecipes>
  );
};

export default Recipes;
