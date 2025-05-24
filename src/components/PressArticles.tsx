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
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/css/tile-list';
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const StyledTileListItem = styled.li<{ $imageWidthPx: number }>`
  ${TILE_LIST_ITEM_STYLE}
`;

const StyledArticleListItem = styled(Link)<{ $imageWidthPx: number }>`
  ${TILE_LIST_ITEM_LINK_STYLE}
`;

const StyledTileImageContainer = styled.div<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  ${TILE_IMAGE_CONTAINER_STYLE}
`;

const StyledTileImage = styled(OptimizedImage)<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  ${TILE_IMAGE_STYLE}
`;

const StyledTileInformation = styled.div<{ $imageWidthPx: number }>`
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

const PressArticles = () => {
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
                fallbackSourceSet={[{ size: '600w', src: article.image }]}
                sizes={`${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
                sourceSet={[{ size: '600w', src: article.imageWebp }]}
              />
            </StyledTileImageContainer>
            <StyledTileInformation
              $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
            >
              <StyledArticlePublication type="p">
                {article.publication}
              </StyledArticlePublication>
              <Typography type="h2">{article.title}</Typography>
              <StyledArticleDate type="p">{article.date}</StyledArticleDate>
            </StyledTileInformation>
          </StyledArticleListItem>
        </StyledTileListItem>
      ))}
    </StyledTileList>
  );
};

export default PressArticles;
