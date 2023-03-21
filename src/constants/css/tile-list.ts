import { css } from 'styled-components';
import {
  TILE_LIST_BREAKPOINT_WIDTH_PX,
  TILE_LIST_IMAGE_WIDTH_PX,
} from '../breakpoint';

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
  margin: 32px 24px;
  width: ${TILE_LIST_BREAKPOINT_WIDTH_PX - 48}px;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    flex-direction: column;
    margin: 32px 0;
    width: calc(100% - 48px);
  }
`;

export const TILE_IMAGE_CONTAINER_STYLE = css<{ $aspectRatio: number }>`
  align-items: center;
  display: flex;
  // Mitigate screen flash for image loading state ending
  height: ${({ $aspectRatio }) => $aspectRatio * TILE_LIST_IMAGE_WIDTH_PX}px;
  justify-content: center;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: unset;
    max-height: ${({ $aspectRatio }) =>
      $aspectRatio * TILE_LIST_IMAGE_WIDTH_PX}px;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

export const TILE_IMAGE_STYLE = css<{ $aspectRatio: number }>`
  height: ${({ $aspectRatio }) => $aspectRatio * TILE_LIST_IMAGE_WIDTH_PX}px;
  width: ${TILE_LIST_IMAGE_WIDTH_PX}px;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: unset;
    max-height: ${({ $aspectRatio }) =>
      $aspectRatio * TILE_LIST_IMAGE_WIDTH_PX}px;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

export const TILE_INFORMATION_STYLE = css`
  margin: 0 0 0 24px;
  text-align: left;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    margin: 24px auto 0;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
  }
`;
