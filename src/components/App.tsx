import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import { GlobalStyle } from '../constants/css/global-style';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';
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
    <HelmetProvider>
      <GlobalStyle />
      <Router>
        <RotateTheme rotateTheme={rotateTheme} />
        <ScrollToTop />
        <Logo onToggleTheme={rotateTheme} theme={theme} />
        <Routes>
          {/* All routes must be represented in cypress/types/route-path.ts */}
          <Route element={<Home />} path="/" />
          <Route element={<Recipes />} path="/recipes" />
          <Route element={<Purchase />} path="/purchase" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer onToggleTheme={rotateTheme} />
      </Router>
    </HelmetProvider>
  );
};

export default App;
