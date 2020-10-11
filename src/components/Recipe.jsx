import {
  StyledAside,
  StyledMaterial,
  StyledMaterialAmount,
  StyledMaterialName,
  StyledMaterials,
  StyledRecipe,
  StyledStep,
  StyledStepContent,
  StyledSteps,
  StyledTime,
  StyledTitle,
  StyledVideo,
} from '../styled-components/Recipe';
import React from 'react';

export default function Recipe({ recipe }) {
  return (
    <StyledRecipe>
      <StyledTitle>{recipe.title}</StyledTitle>
      <StyledTime>{recipe.time}</StyledTime>
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
      <h5>Materials</h5>
      <StyledMaterials>
        {recipe.materials.map(({ amount, name }) => (
          <StyledMaterial key={name}>
            <StyledMaterialName>{name}</StyledMaterialName>
            <StyledMaterialAmount>{amount}</StyledMaterialAmount>
          </StyledMaterial>
        ))}
      </StyledMaterials>
      <h5>Instructions</h5>
      <StyledSteps>
        {recipe.steps.map(({ aside, content }) => (
          <StyledStep key={content}>
            <div>
              <StyledStepContent>{content}</StyledStepContent>
              <StyledAside>{aside}</StyledAside>
            </div>
          </StyledStep>
        ))}
      </StyledSteps>
    </StyledRecipe>
  );
}
