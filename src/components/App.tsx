import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import { GLOBAL_STYLE as GlobalStyle } from '../constants/css/global-style';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import Order from './Order';
import React from 'react';
import Recipes from './Recipes';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../hooks/use-theme';
import NavigationBar from './NavigationBar';
import Products from './Products';
import Press from './Press';
import Merch from './Merch';
import Retail from './Retail';

const App: React.FC = () => {
  useTheme();

  return (
    <React.StrictMode>
      <HelmetProvider>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <NavigationBar />
          <Routes>
            {/**
             * Each route should be represented in each of the following places:
             *
             * - cypress/e2e test module
             * - cypress/types/route-path.ts
             * - constants/navigation.ts (optional)
             * - public/manifest.json `shortcuts` (optional)
             */}
            <Route element={<Home />} path="/" />
            <Route element={<Products />} path="/products" />
            <Route element={<Order />} path="/order" />
            <Route element={<Recipes />} path="/recipes" />
            <Route element={<About />} path="/about" />
            <Route element={<Press />} path="/press" />
            <Route element={<Merch />} path="/merch" />
            <Route element={<Retail />} path="/retail" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
