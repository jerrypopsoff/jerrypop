import { SHADOW } from '../color';
import { css } from 'styled-components';

export const withBoxShadow = css`
  box-shadow: 1px 2px 2px ${SHADOW}, 2px 4px 4px ${SHADOW},
    3px 6px 6px ${SHADOW};
`;

export const withTextShadow = css`
  text-shadow: 1px 2px 2px ${SHADOW}, 2px 4px 4px ${SHADOW},
    3px 6px 6px ${SHADOW};
`;

export const withLowTextShadow = css`
  text-shadow: 0.5px 1px 1px ${SHADOW};
`;
