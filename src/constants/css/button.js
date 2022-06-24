import { css } from 'styled-components';

export const buttonStyle = css`
  align-items: center;
  background-color: #edeeff;
  border: none;
  border-radius: 4px;
  color: #222;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.25px;
  margin: 8px;
  min-width: 240px;
  padding: 24px 0;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #444;
  }
`;
