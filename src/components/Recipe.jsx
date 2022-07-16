import {
  BLACK,
  GRAYSCALE_DARK,
  GRAYSCALE_MEDIUM,
  WHITE,
} from '../constants/color';
import React, { useState } from 'react';
import { offsetPulse, pulse } from '../constants/css/pulse';
import Typography from './Typography';
import { dangleRotation } from '../constants/css/rotation';
import styled from 'styled-components';
import { withBoxShadow } from '../constants/css/shadow';

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

const StyledRecipe = styled.li`
  ${withBoxShadow}
  background-color: ${WHITE};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${BLACK};
  margin: 12px auto;
  padding: 20px;
  text-align: left;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }

  ${({ isCollapsed }) => {
    if (!isCollapsed) {
      return '';
    }

    return `
      cursor: pointer;

      &:nth-child(odd) {
        ${pulse}
      }

      &:nth-child(even) {
        ${offsetPulse}
      }

      &:hover,
      &:focus {
        ${dangleRotation}
      }
    `;
  }}

  a {
    color: ${GRAYSCALE_DARK};

    &:hover,
    &:focus {
      color: ${GRAYSCALE_MEDIUM};
    }
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
`;

const StyledTime = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
`;

const StyledMaterials = styled.ul`
  ${listStyles}
  font-family: 'Helvetica Neue', sans-serif;
`;

const StyledMaterial = styled.li`
  margin: 16px 0;
`;

const StyledMaterialName = styled.span`
  display: block;
  text-transform: uppercase;
`;

const StyledMaterialAmount = styled.span`
  ${asideFont}
  margin-top: 4px;
  text-transform: lowercase;
`;

const StyledSteps = styled.ol`
  ${listStyles}
  font-family: 'Helvetica Neue', sans-serif;
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

export default function Recipe({ recipe, theme }) {
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
      <Typography hasTextShadow={false} margin="24px 0 16px" type="h4">
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
      <Typography hasTextShadow={false} margin="24px 0 16px" type="h4">
        Instructions
      </Typography>
      <StyledSteps>
        {recipe.steps.map(({ aside, content }) => (
          <StyledStep key={content}>
            <div>
              <StyledStepContent>{content}</StyledStepContent>
              <StyledAside dangerouslySetInnerHTML={{ __html: aside }} />
            </div>
          </StyledStep>
        ))}
      </StyledSteps>
    </>
  );

  const onRecipeClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onRecipeKeyDown = ({ keyCode } = {}) => {
    keyCode === 13 && setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledRecipe
      isCollapsed={isCollapsed}
      onClick={isCollapsed ? onRecipeClick : undefined}
      onKeyDown={isCollapsed ? onRecipeKeyDown : undefined}
      role={isCollapsed ? 'button' : undefined}
      tabIndex={isCollapsed ? 0 : undefined}
      theme={theme}
    >
      <StyledTitle hasTextShadow={false} margin="0 0 4px" type="h3">
        {recipe.title}
      </StyledTitle>
      <StyledTime>{recipe.time}</StyledTime>
      {recipeDetails}
    </StyledRecipe>
  );
}
