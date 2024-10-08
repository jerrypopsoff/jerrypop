import { SHADOW } from '../color';
import { css } from 'styled-components';

export const WITH_BOX_SHADOW_STYLE = css`
  box-shadow:
    1px 2px 2px ${SHADOW},
    2px 4px 4px ${SHADOW},
    3px 6px 6px ${SHADOW};
`;

export const WITH_TEXT_SHADOW_STYLE = css`
  text-shadow:
    1px 2px 2px ${SHADOW},
    2px 4px 4px ${SHADOW},
    3px 6px 6px ${SHADOW};
`;

export const WITH_LOW_TEXT_SHADOW_STYLE = css`
  text-shadow: 0.5px 1px 1px ${SHADOW};
`;
