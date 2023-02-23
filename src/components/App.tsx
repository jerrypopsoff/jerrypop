import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import { GLOBAL_STYLE as GlobalStyle } from '../constants/css/global-style';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../hooks/use-theme';
import Ingredients from './Ingredients';
import NavigationBar from './NavigationBar';
import { BLACK } from '../constants/color';
import BackgroundWordmark from './BackgroundWordmark';

const App: React.FC = () => {
  useTheme();

  return (
    <React.StrictMode>
      <HelmetProvider>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <NavigationBar />
          <BackgroundWordmark fillColor={BLACK} isFixed={true} />
          <Routes>
            {/**
             * Each route should be represented in each of the following places:
             *
             * - cypress/e2e test module
             * - cypress/types/route-path.ts
             * - public/manifest.json `shortcuts` (optional)
             */}
            <Route element={<Home />} path="/" />
            <Route element={<Recipes />} path="/recipes" />
            <Route element={<Purchase />} path="/purchase" />
            <Route element={<About />} path="/about" />
            <Route element={<Ingredients />} path="/ingredients" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
