import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
// import InstagramFeed from './InstagramFeed';
import Logo from './Logo';
import { useTheme } from '../hooks/use-theme';
import { WHITE } from '../constants/color';
import { HOME_SECTION_BACKGROUND_Z_INDEX } from '../constants/z-index';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledThemeSection = styled.section`
  background-color: var(--main-theme-dark);
  color: ${WHITE};
  height: 362px;
  text-align: center;
  width: 100%;
  z-index: ${HOME_SECTION_BACKGROUND_Z_INDEX};
`;

const StyledRegularSection = styled.section`
  background-color: ${WHITE};
  width: 100%;
  z-index: ${HOME_SECTION_BACKGROUND_Z_INDEX};
`;

const StyledTagline = styled(Typography)`
  font-size: 18px;
  padding: 0 24px;
  text-transform: none;
`;

const Home: React.FC = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <StyledThemeSection>
          <Logo onToggleTheme={rotateTheme} theme={theme} />
        </StyledThemeSection>
        <StyledRegularSection>
          <StyledTagline margin="48px auto" maxWidth="600px" type="h1">
            Locally handcrafted San Francisco popcorn.
          </StyledTagline>
          {/* <InstagramFeed /> */}
        </StyledRegularSection>
      </StyledHome>
    </>
  );
};

export default Home;
