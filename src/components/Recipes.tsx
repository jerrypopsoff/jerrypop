'use client';

import { RECIPES } from '../constants/recipe';
import Recipe from './Recipe';
import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import PbjSheet600 from '../images/glamorous-pbj-sheet-600.jpeg';
import PbjSheet1200 from '../images/glamorous-pbj-sheet-1200.jpeg';
import PbjSheet2400 from '../images/glamorous-pbj-sheet-2400.jpeg';
import PbjSheetWebp600 from '../images/glamorous-pbj-sheet-600.webp';
import PbjSheetWebp1200 from '../images/glamorous-pbj-sheet-1200.webp';
import PbjSheetWebp2400 from '../images/glamorous-pbj-sheet-2400.webp';

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
      <GlamorPhotograph
        alt="Photograph of PB&J Craft Popcorn spread onto a baking sheet"
        aspectRatio={4032 / 3024}
        fallbackSrc={PbjSheet2400.src}
        fallbackSourceSet={[
          { size: '600w', src: PbjSheet600.src },
          { size: '1200w', src: PbjSheet1200.src },
          { size: '2400w', src: PbjSheet2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: PbjSheetWebp600.src },
          { size: '1200w', src: PbjSheetWebp1200.src },
          { size: '2400w', src: PbjSheetWebp2400.src },
        ]}
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
