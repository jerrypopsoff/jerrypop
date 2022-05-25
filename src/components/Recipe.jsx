import React, { useState } from 'react';
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
  margin-top: 8px;
`;

const StyledRecipe = styled.div`
  background-color: #edeeff;
  border: 1px solid #edeeff;
  border-radius: 5px;
  box-sizing: border-box;
  color: #222;
  cursor: ${({ isCollapsed }) => (isCollapsed ? 'pointer' : 'default')};
  margin: 12px auto;
  padding: 20px;
  text-align: left;
  width: 500px;

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }

  ${({ isCollapsed }) =>
    isCollapsed ? '&:hover, &:focus { color: #555; }' : ''}

  a {
    color: inherit;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #555;
    }
  }
`;

const StyledTitle = styled.h2`
  margin: 0 0 4px;
  text-align: center;
  text-transform: uppercase;
`;

const StyledTime = styled.span`
  display: block;
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

const StyledRecipeHeading = styled.h5`
  margin: 24px 0 16px;
  text-transform: uppercase;
`;

const StyledMaterials = styled.ul`
  ${listStyles}
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

export default function Recipe({ recipe }) {
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
      <StyledRecipeHeading>Materials</StyledRecipeHeading>
      <StyledMaterials>
        {recipe.materials.map(({ amount, name }) => (
          <StyledMaterial key={name}>
            <StyledMaterialName>{name}</StyledMaterialName>
            <StyledMaterialAmount>{amount}</StyledMaterialAmount>
          </StyledMaterial>
        ))}
      </StyledMaterials>
      <StyledRecipeHeading>Instructions</StyledRecipeHeading>
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
      tabIndex={isCollapsed ? 0 : -1}
    >
      <StyledTitle>{recipe.title}</StyledTitle>
      <StyledTime>{recipe.time}</StyledTime>
      {recipeDetails}
    </StyledRecipe>
  );
}
