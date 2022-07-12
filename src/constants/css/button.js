import { css } from 'styled-components';
import { withBoxShadow } from './shadow';

export const buttonStyle = css`
  ${withBoxShadow}
  align-items: center;
  background-color: var(--main-theme-light);
  border: none;
  border-radius: 4px;
  color: var(--default-text-dark);
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
    color: var(--default-text-medium);
  }
`;
