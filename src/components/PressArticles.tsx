import Heading2 from './common/Heading2';
import Paragraph from './common/Paragraph';
import styled from 'styled-components';
import {
  TILE_LIST_STYLE,
  TILE_LIST_ITEM_STYLE,
  TILE_INFORMATION_STYLE,
  TILE_LIST_ITEM_LINK_STYLE,
} from '../constants/css/tile-list';
import { ARTICLES } from '../constants/press';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/css/tile-list';
import OptimizedImage from './common/OptimizedImage';
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

const StyledTileInformation = styled.div<{ $imageWidthPx: number }>`
  ${TILE_INFORMATION_STYLE}
`;

const StyledArticlePublication = styled(Paragraph)`
  font-weight: 300;
  margin: 0 0 8px;
  text-transform: uppercase;
`;

const StyledArticleDate = styled(Paragraph)`
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
            <OptimizedImage
              alt={article.imageAltText}
              aspectRatioCss="600 / 600"
              sizes={`300px (min-width: 315px), 95vw`}
              src={article.image}
              widthCss="min(95vw, 18.75rem)"
            />
            <StyledTileInformation
              $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
            >
              <StyledArticlePublication>
                {article.publication}
              </StyledArticlePublication>
              <Heading2>{article.title}</Heading2>
              <StyledArticleDate>{article.date}</StyledArticleDate>
            </StyledTileInformation>
          </StyledArticleListItem>
        </StyledTileListItem>
      ))}
    </StyledTileList>
  );
};

export default PressArticles;
