import styled from 'styled-components';

export const StyledSocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
`;

export const StyledSocialLinksListItem = styled.li`
  margin: 16px;
`;

export const StyledSocialLink = styled.a`
  display: flex;
`;

export const StyledSocialLinkIcon = styled.img`
  height: 32px;
  padding: 5px;
`;

/**
 * Override for Instagram due to extra padding on the image asset
 */
export const StyledInstagramIcon = styled.img`
  height: 43px;
`;
