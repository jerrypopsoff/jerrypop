import { css } from 'styled-components';
import {
  TILE_LIST_BREAKPOINT_WIDTH_PX,
  DEFAULT_TILE_LIST_IMAGE_WIDTH_PX,
} from '../breakpoint';

export const TILE_HORIZONTAL_MARGIN_PX = 24;
export const TILE_VERTICAL_MARGIN_PX = 32;

export const TILE_LIST_STYLE = css`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

export const TILE_LIST_ITEM_STYLE = css`
  align-items: center;
  display: flex;
  margin: ${TILE_VERTICAL_MARGIN_PX}px ${TILE_HORIZONTAL_MARGIN_PX}px;
  width: ${TILE_LIST_BREAKPOINT_WIDTH_PX - 2 * TILE_HORIZONTAL_MARGIN_PX}px;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    flex-direction: column;
    margin: ${TILE_VERTICAL_MARGIN_PX}px 0;
    width: calc(100% - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_IMAGE_CONTAINER_STYLE = css<{
  $aspectRatio: number;
  $imageWidthPx?: number;
}>`
  align-items: center;
  display: flex;
  // Mitigate screen flash for image loading state ending
  height: ${({ $aspectRatio, $imageWidthPx }) =>
    $aspectRatio * ($imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX)}px;
  justify-content: center;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: unset;
    max-height: ${({ $aspectRatio, $imageWidthPx }) =>
      $aspectRatio * ($imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX)}px;
    max-width: ${({ $imageWidthPx }) =>
      $imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_IMAGE_STYLE = css<{
  $aspectRatio: number;
  $imageWidthPx?: number;
}>`
  height: ${({ $aspectRatio, $imageWidthPx }) =>
    $aspectRatio * ($imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX)}px;
  width: ${({ $imageWidthPx }) =>
    $imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: unset;
    max-height: ${({ $aspectRatio, $imageWidthPx }) =>
      $aspectRatio * ($imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX)}px;
    max-width: ${({ $imageWidthPx }) =>
      $imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - ${2 * TILE_HORIZONTAL_MARGIN_PX}px);
  }
`;

export const TILE_INFORMATION_STYLE = css<{ $imageWidthPx?: number }>`
  margin: 0 0 0 ${TILE_HORIZONTAL_MARGIN_PX}px;
  text-align: left;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    margin: 24px auto 0;
    max-width: ${({ $imageWidthPx }) =>
      $imageWidthPx ?? DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px;
  }
`;
