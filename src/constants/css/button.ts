import { css } from 'styled-components';
import { DANGLE_STYLE } from './rotation';

export const BUTTON_STYLE = css`
  align-items: center;
  background-color: var(--color-foreground);
  border: none;
  border-radius: 3px;
  color: var(--color-background);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  letter-spacing: 0.25px;
  margin: 8px;
  padding: 16px 24px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
    color: var(--color-background);
  }
`;
