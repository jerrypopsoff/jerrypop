import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import {
  TILE_LIST_STYLE,
  TILE_LIST_ITEM_STYLE,
  TILE_IMAGE_CONTAINER_STYLE,
  TILE_IMAGE_STYLE,
  TILE_INFORMATION_STYLE,
  TILE_LIST_ITEM_LINK_STYLE,
} from '../constants/css/tile-list';
import { ARTICLES } from '../constants/press';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/breakpoint';
import OptimizedImage from './OptimizedImage';

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const StyledTileListItem = styled.li`
  ${TILE_LIST_ITEM_STYLE}
`;

const StyledArticleListItem = styled.a`
  ${TILE_LIST_ITEM_LINK_STYLE}
`;

const StyledTileImageContainer = styled.div`
  ${TILE_IMAGE_CONTAINER_STYLE}
`;

const StyledTileImage = styled(OptimizedImage)`
  ${TILE_IMAGE_STYLE}
`;

const StyledTileInformation = styled.div`
  ${TILE_INFORMATION_STYLE}
`;

const StyledArticlePublication = styled(Typography)`
  font-weight: 300;
  margin: 0 0 8px;
  text-transform: uppercase;
`;

const StyledArticleDate = styled(Typography)`
  font-size: 12px;
  margin: 12px 0 0;
`;

const PressArticles: React.FC = () => {
  return (
    <StyledTileList>
      {ARTICLES.map((article) => (
        <StyledTileListItem
          $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
          key={article.title}
        >
          <StyledArticleListItem
            $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
            href={article.href}
            rel="noreferrer"
            target="_blank"
          >
            <StyledTileImageContainer
              $aspectRatio={1}
              $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
            >
              <StyledTileImage
                $aspectRatio={1}
                $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
                alt={article.imageAltText}
                fallbackSrc={article.image}
                fallbackSrcSet={`${article.image} 600w`}
                sizes={`${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
                srcSet={`${article.imageWebp} 600w`}
              />
            </StyledTileImageContainer>
            <StyledTileInformation
              $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
            >
              <StyledArticlePublication type="p">
                {article.publication}
              </StyledArticlePublication>
              <Typography margin="0" type="h2">
                {article.title}
              </Typography>
              <StyledArticleDate type="p">{article.date}</StyledArticleDate>
            </StyledTileInformation>
          </StyledArticleListItem>
        </StyledTileListItem>
      ))}
    </StyledTileList>
  );
};

export default PressArticles;
