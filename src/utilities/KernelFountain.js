import {
  KERNEL_NARROW_HEIGHT_PX,
  KERNEL_WIDE_HEIGHT_PX,
  MAIN_LOGO_NARROW_HEIGHT_PX,
  MAIN_LOGO_WIDE_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/kernel-fountain';

export function getFountainLeft(windowInnerWidth) {
  const arbitraryArtOffsetPx = 5;
  const kernelHeightPx =
    windowInnerWidth > WINDOW_BREAKPOINT_WIDTH_PX
      ? KERNEL_WIDE_HEIGHT_PX
      : KERNEL_NARROW_HEIGHT_PX;

  return windowInnerWidth / 2 - kernelHeightPx / 2 + arbitraryArtOffsetPx;
}

export function getFountainTop(windowInnerWidth) {
  const arbitraryArtOffsetPx = -4;
  const logoTopMarginPx = 48;
  const logoHeightPx =
    windowInnerWidth > WINDOW_BREAKPOINT_WIDTH_PX
      ? MAIN_LOGO_WIDE_HEIGHT_PX
      : MAIN_LOGO_NARROW_HEIGHT_PX;
  const mouthHeightRatio = 0.65;

  return (
    logoTopMarginPx + mouthHeightRatio * logoHeightPx + arbitraryArtOffsetPx
  );
}
