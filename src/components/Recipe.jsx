import React from 'react';
import styled from 'styled-components';

const listStyles = `
  margin-bottom: 0;
  margin-left: 20px;
  padding: 0;
`;

const asideFont = `
  display: block;
  font-size: 12px;
  font-style: italic;
  margin-top: 4px;
`;

const StyledRecipe = styled.div`
  background-color: #edeeff;
  border: 1px solid #edeeff;
  border-radius: 5px;
  box-sizing: border-box;
  color: #222;
  margin: 12px auto;
  padding: 20px;
  text-align: left;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }
`;

const StyledTitle = styled.h2`
  margin: 0 0 5px;
  text-align: center;
  text-transform: uppercase;
`;

const StyledTime = styled.span`
  display: block;
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

const StyledMaterials = styled.ul`
  ${listStyles}
`;

const StyledMaterial = styled.li`
  margin: 15px 0;
`;

const StyledMaterialName = styled.span`
  display: block;
  text-transform: uppercase;
`;

const StyledMaterialAmount = styled.span`
  ${asideFont}
  text-transform: lowercase;
`;

const StyledSteps = styled.ol`
  ${listStyles}
`;

const StyledStep = styled.li`
  margin: 12px 0;

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

export default function Recipe({ recipe }) {
  return (
    <StyledRecipe>
      <StyledTitle>{recipe.title}</StyledTitle>
      <StyledTime>{recipe.time}</StyledTime>
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
