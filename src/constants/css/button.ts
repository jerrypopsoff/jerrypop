import { BLACK, WHITE } from '../color';
import { css } from 'styled-components';
import { withBoxShadow } from './shadow';

export const buttonStyle = css`
  ${withBoxShadow}
  align-items: center;
  background-color: ${WHITE};
  border: none;
  border-radius: 4px;
  color: ${BLACK};
  cursor: pointer;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.25px;
  margin: 8px;
  min-width: 192px;
  padding: 24px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${BLACK};
  }
`;
