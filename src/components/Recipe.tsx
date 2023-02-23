import React, { useState } from 'react';
import { OFFSET_PULSE_STYLE, PULSE_STYLE } from '../constants/css/pulse';
import { Recipe } from '../types/recipe';
import Typography from './Typography';
import { DANGLE_STYLE } from '../constants/css/rotation';
import styled from 'styled-components';
import {
  CARD_OUTER_STYLE,
  CARD_INNER_STYLE,
  CARD_TITLE_STYLE,
} from '../constants/css/card';

const listStyles = `
  margin-bottom: 0;
  margin-left: 20px;
  padding: 0;
`;

const asideFont = `
  display: block;
  font-size: 12px;
  font-style: italic;
  margin-top: 8px;
`;

const StyledRecipe = styled.li<{ isCollapsed: boolean }>`
  ${CARD_OUTER_STYLE}

  ${({ isCollapsed }) => {
    if (!isCollapsed) {
      return '';
    }

    return `
      cursor: pointer;

      &:nth-child(odd) {
        ${PULSE_STYLE}
      }

      &:nth-child(even) {
        ${OFFSET_PULSE_STYLE}
      }

      &:hover,
      &:focus {
        ${DANGLE_STYLE}
      }
    `;
  }}
`;

const StyledInnerRecipe = styled.div`
  ${CARD_INNER_STYLE}
`;

const StyledTitle = styled(Typography)`
  ${CARD_TITLE_STYLE}
`;

const StyledTime = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
`;

const StyledMaterials = styled.ul`
  ${listStyles}
`;

const StyledMaterial = styled.li`
  margin: 16px 0;
`;

const StyledMaterialName = styled.span`
  display: block;
`;

const StyledMaterialAmount = styled.span`
  ${asideFont}
  margin-top: 4px;
  text-transform: lowercase;
`;

const StyledSteps = styled.ol`
  ${listStyles}
`;

const StyledStep = styled.li`
  margin: 16px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledStepContent = styled.span`
  display: block;
  font-size: 16px;
`;

const StyledAside = styled.span`
  ${asideFont}
`;

const StyledVideo = styled.div`
  margin: 16px 0;
  height: 258px;
  text-align: center;
  width: 100%;

  @media (max-width: 600px) {
    height: 174px;
  }
`;

interface Props {
  recipe: Recipe;
}

const RecipeComponent: React.FC<Props> = ({ recipe }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const recipeDetails = isCollapsed ? null : (
    <>
      {recipe.href ? (
        <StyledVideo>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="100%"
            width="100%"
            src={recipe.href}
            title={recipe.title}
          ></iframe>
        </StyledVideo>
      ) : null}
      <Typography margin="24px 0 16px" type="h4">
        Materials
      </Typography>
      <StyledMaterials>
        {recipe.materials.map(({ amount, name }) => (
          <StyledMaterial key={name}>
            <StyledMaterialName>{name}</StyledMaterialName>
            <StyledMaterialAmount>{amount}</StyledMaterialAmount>
          </StyledMaterial>
        ))}
      </StyledMaterials>
      <Typography margin="24px 0 16px" type="h4">
        Instructions
      </Typography>
      <StyledSteps>
        {recipe.steps.map(({ aside, content }) => (
          <StyledStep key={content}>
            <div>
              <StyledStepContent>{content}</StyledStepContent>
              {aside && (
                <StyledAside dangerouslySetInnerHTML={{ __html: aside }} />
              )}
            </div>
          </StyledStep>
        ))}
      </StyledSteps>
    </>
  );

  const onRecipeClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onRecipeKeyDown = ({ key }: { key: string } = { key: '' }) => {
    key === 'Enter' && setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledRecipe
      isCollapsed={isCollapsed}
      onClick={isCollapsed ? onRecipeClick : undefined}
      onKeyDown={isCollapsed ? onRecipeKeyDown : undefined}
      role={isCollapsed ? 'button' : undefined}
      tabIndex={isCollapsed ? 0 : undefined}
    >
      <StyledInnerRecipe>
        <StyledTitle type="h3">{recipe.title}</StyledTitle>
        <StyledTime>{recipe.time}</StyledTime>
        {recipeDetails}
      </StyledInnerRecipe>
    </StyledRecipe>
  );
};

export default RecipeComponent;
