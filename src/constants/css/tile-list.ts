import styled from 'styled-components';
import OptimizedImage from '../../components/OptimizedImage';
import {
  TILE_LIST_BREAKPOINT_WIDTH_PX,
  TILE_LIST_IMAGE_HEIGHT_PX,
  TILE_LIST_IMAGE_WIDTH_PX,
} from '../breakpoint';

export const StyledTileList = styled.ul`
  display: flex;
  flex-flow: wrap;
  padding: 0;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

export const StyledTileListItem = styled.li`
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

export const StyledTileImageContainer = styled.div`
  align-items: center;
  display: flex;
  // Mitigate screen flash for image loading state ending
  height: ${TILE_LIST_IMAGE_HEIGHT_PX}px;
  justify-content: center;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: calc(100vw - 48px);
    max-height: ${TILE_LIST_IMAGE_HEIGHT_PX}px;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

export const StyledTileImage = styled(OptimizedImage)`
  height: ${TILE_LIST_IMAGE_HEIGHT_PX}px;
  width: ${TILE_LIST_IMAGE_WIDTH_PX}px;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    height: calc(100vw - 48px);
    max-height: ${TILE_LIST_IMAGE_HEIGHT_PX}px;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

export const StyledTileInformation = styled.div`
  margin: 0 0 0 24px;
  text-align: left;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    margin: 24px auto 0;
    max-width: ${TILE_LIST_IMAGE_WIDTH_PX}px;
  }
`;
