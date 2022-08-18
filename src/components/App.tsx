import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GlobalStyle } from '../constants/css/global-style';
import { HelmetProvider } from 'react-helmet-async';
import Logo from './Logo';
import NotFound from './NotFound';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import RotateTheme from './RotateTheme';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../hooks/use-theme';

const App: React.FC = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <React.StrictMode>
      <HelmetProvider>
        <GlobalStyle />
        <Router>
          <RotateTheme rotateTheme={rotateTheme} />
          <ScrollToTop />
          <Logo onToggleTheme={rotateTheme} theme={theme} />
          <Routes>
            {/**
             * Each route should be represented in each of the following places:
             *
             * - cypress/e2e test module
             * - cypress/types/route-path.ts
             * - public/manifest.json `shortcuts` (optional)
             */}
            <Route element={<></>} path="/" />
            <Route element={<Recipes />} path="/recipes" />
            <Route element={<Purchase />} path="/purchase" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Router>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
