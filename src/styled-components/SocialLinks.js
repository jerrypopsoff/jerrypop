import styled from 'styled-components';

export const StyledSocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledSocialLinksListItem = styled.li`
  margin: 0 4px;
`;

export const StyledSocialLink = styled.a`
  display: flex;
`;

export const StyledSocialLinkIcon = styled.img`
  height: 24px;
  padding: 4px;
  width: 24px;
`;

/**
 * Override for Instagram due to extra padding on the image asset
 */
export const StyledInstagramIcon = styled.img`
  height: 35px;
  width: 35px;
`;
