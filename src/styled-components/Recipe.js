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

export const StyledRecipe = styled.div`
  background-color: #edeeff;
  border: 1px solid #edeeff;
  border-radius: 5px;
  box-sizing: border-box;
  color: #222;
  margin: 12px auto;
  padding: 20px;
  text-align: left;
  width: 500px;

  -webkit-touch-callout: default; /* iOS Safari */
  -webkit-user-select: text; /* Safari */
  -khtml-user-select: text; /* Konqueror HTML */
  -moz-user-select: text; /* Old versions of Firefox */
  -ms-user-select: text; /* Internet Explorer/Edge */
  user-select: text; /* Non-prefixed version, currently
                      supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }
`;

export const StyledTitle = styled.h2`
  margin: 0 0 5px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledTime = styled.span`
  display: block;
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

export const StyledMaterials = styled.ul`
  ${listStyles}
`;

export const StyledMaterial = styled.li`
  margin: 15px 0;
`;

export const StyledMaterialName = styled.span`
  display: block;
  text-transform: uppercase;
`;

export const StyledMaterialAmount = styled.span`
  ${asideFont}
  text-transform: lowercase;
`;

export const StyledSteps = styled.ol`
  ${listStyles}
`;

export const StyledStep = styled.li`
  margin: 12px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledStepContent = styled.span`
  display: block;
  font-size: 16px;
`;

export const StyledAside = styled.span`
  ${asideFont}
`;

export const StyledVideo = styled.div`
  margin: 10px 0;
  height: 258px;
  text-align: center;
  width: 100%;

  @media (max-width: 600px) {
    height: 174px;
  }
`;
