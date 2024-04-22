import { css } from 'styled-components';

const TILE_HORIZONTAL_MARGIN_PX = 24;
const TILE_VERTICAL_MARGIN_PX = 32;

function getTileListBreakpointWidth({
  $imageWidthPx,
}: {
  $imageWidthPx: number;
}) {
  return 2 * $imageWidthPx + 3 * TILE_HORIZONTAL_MARGIN_PX;
}

export const DEFAULT_TILE_LIST_IMAGE_WIDTH_PX = 300;

export const TILE_LIST_STYLE = css`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

export const TILE_LIST_ITEM_STYLE = css<{ $imageWidthPx: number }>`
  align-items: center;
  display: flex;
  margin: ${TILE_VERTICAL_MARGIN_PX}px ${TILE_HORIZONTAL_MARGIN_PX}px;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    flex-direction: column;
    margin: ${TILE_VERTICAL_MARGIN_PX}px 0;
    width: calc(100% - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_LIST_ITEM_LINK_STYLE = css<{ $imageWidthPx: number }>`
  align-items: center;
  display: flex;
  // Margin and padding provide rectangular focus state outline.
  margin: -8px;
  padding: 8px;
  text-decoration: none;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const TILE_IMAGE_CONTAINER_STYLE = css<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  align-items: center;
  display: flex;
  // Mitigate screen flash for image loading state ending
  height: ${({ $aspectRatio, $imageWidthPx }) =>
    $aspectRatio * $imageWidthPx}px;
  justify-content: center;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    height: unset;
    max-height: ${({ $aspectRatio, $imageWidthPx }) =>
      $aspectRatio * $imageWidthPx}px;
    max-width: ${({ $imageWidthPx }) => $imageWidthPx}px;
    width: calc(100vw - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_IMAGE_STYLE = css<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  height: ${({ $aspectRatio, $imageWidthPx }) =>
    $aspectRatio * $imageWidthPx}px;
  width: ${({ $imageWidthPx }) => $imageWidthPx}px;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    height: unset;
    max-height: ${({ $aspectRatio, $imageWidthPx }) =>
      $aspectRatio * $imageWidthPx}px;
    max-width: ${({ $imageWidthPx }) => $imageWidthPx}px;
    width: calc(100vw - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_INFORMATION_STYLE = css<{ $imageWidthPx: number }>`
  margin: 0 0 0 ${TILE_HORIZONTAL_MARGIN_PX}px;
  max-width: ${({ $imageWidthPx }) => $imageWidthPx}px;
  text-align: left;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    margin: 24px auto 0;
  }
`;

export const TILE_LIST_DIVIDER_STYLE = css<{
  $imageWidthPx: number;
  $margin?: string;
}>`
  background-color: var(--color-foreground);
  height: 1px;
  margin: ${({ $margin }) => $margin};
  width: ${({ $imageWidthPx }) =>
    2 * $imageWidthPx + TILE_HORIZONTAL_MARGIN_PX}px;

  @media (max-width: ${getTileListBreakpointWidth}px) {
    max-width: ${({ $imageWidthPx }) => $imageWidthPx}px;
    width: calc(100% - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;
