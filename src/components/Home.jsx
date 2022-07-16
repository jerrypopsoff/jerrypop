import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default function Home({ onToggleTheme, theme }) {
  return (
    <StyledHome>
      <Logo onToggleTheme={onToggleTheme} theme={theme} />
      <Typography type="h1">Poppin’ off with Jerry</Typography>
      <Typography maxWidth="600px" type="p">
        Locally handcrafted popcorn from San Francisco, California.
      </Typography>
      <NavigationMenu />
    </StyledHome>
  );
}
