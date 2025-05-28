'use client';

import { RECIPES } from '../constants/recipe';
import { Recipe } from './Recipe';
import { Heading1 } from './common/Heading1';
import { Paragraph } from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-pbj-sheet.jpeg';
import { PageHeaderPhotograph } from './common/PageHeaderPhotograph';
import { PageContentLayout } from './PageContentLayout';

export function Recipes() {
  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of PB&J Craft Popcorn spread onto a baking sheet"
        aspectRatioCss="4032 / 3024"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Recipes</Heading1>
        <Paragraph>Select a recipe to view details.</Paragraph>
        <ul className="max-w-125 w-full">
          {RECIPES.map((recipe) => {
            return <Recipe key={recipe.title} recipe={recipe} />;
          })}
        </ul>
      </PageContentLayout>
    </>
  );
}
