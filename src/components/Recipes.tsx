import { Helmet } from 'react-helmet-async';
import { RECIPES } from '../constants/recipe';
import React from 'react';
import Recipe from './Recipe';
import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import PbjSheet600 from '../images/glamorous-pbj-sheet-600.jpeg';
import PbjSheet1200 from '../images/glamorous-pbj-sheet-1200.jpeg';
import PbjSheet2400 from '../images/glamorous-pbj-sheet-2400.jpeg';
import PbjSheetWebp600 from '../images/glamorous-pbj-sheet-600.webp';
import PbjSheetWebp1200 from '../images/glamorous-pbj-sheet-1200.webp';
import PbjSheetWebp2400 from '../images/glamorous-pbj-sheet-2400.webp';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Recipes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Recipes · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of PB&J Craft Popcorn spread onto a baking sheet"
        aspectRatio={4032 / 3024}
        fallbackSrc={PbjSheet2400}
        fallbackSrcSet={`${PbjSheet600} 600w, ${PbjSheet1200} 1200w, ${PbjSheet2400} 2400w`}
        srcSet={`${PbjSheetWebp600} 600w, ${PbjSheetWebp1200} 1200w, ${PbjSheetWebp2400} 2400w`}
      />
      <Typography type="h1">Recipes</Typography>
      <Typography margin="12px 12px 24px" type="p">
        Select a recipe to view details.
      </Typography>
      <StyledUnorderedList>
        {RECIPES.map((recipe) => {
          return <Recipe key={recipe.title} recipe={recipe} />;
        })}
      </StyledUnorderedList>
    </>
  );
};

export default Recipes;
