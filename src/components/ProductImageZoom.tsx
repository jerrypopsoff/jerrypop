import { DIALOG_BACKDROP } from '../constants/color';
import { DIALOG_Z_INDEX } from '../constants/z-index';
import React from 'react';
import Zoom from 'react-medium-image-zoom';

interface Props {
  children: React.ReactNode;
}

const ProductImageZoom: React.FC<Props> = ({ children }) => {
  return (
    <Zoom
      overlayBgColorEnd={DIALOG_BACKDROP}
      transitionDuration={0}
      wrapStyle={{ margin: '8px' }}
      zoomMargin={8}
      zoomZindex={DIALOG_Z_INDEX}
    >
      {children}
    </Zoom>
  );
};

export default ProductImageZoom;
