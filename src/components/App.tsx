import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import { GLOBAL_STYLE as GlobalStyle } from '../constants/css/global-style';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import { StrictMode } from 'react';
import Recipes from './Recipes';
import ScrollToTopOnPathChange from './ScrollToTopOnPathChange';
import { useTheme } from '../hooks/use-theme';
import NavigationBar from './NavigationBar';
import Products from './Products';
import Merch from './Merch';
import Retail from './Retail';
import Catering from './Catering';

const App = () => {
  useTheme();

  return (
    <StrictMode>
      <HelmetProvider>
        <GlobalStyle />
        <Router>
          <ScrollToTopOnPathChange />
          <NavigationBar />
          <Routes>
            {/**
             * Each route should be represented in each of the following places:
             *
             * - cypress/e2e/[route-name].ts module
             * - cypress/types/route-path.ts
             * - constants/navigation.ts (optional)
             * - public/manifest.json `shortcuts` (optional)
             */}
            <Route element={<Home />} path="/" />
            <Route element={<Products />} path="/products" />
            <Route element={<Recipes />} path="/recipes" />
            <Route element={<About />} path="/about" />
            <Route element={<Merch />} path="/merch" />
            <Route element={<Catering />} path="/catering" />
            <Route element={<Retail />} path="/retail" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </StrictMode>
  );
};

export default App;
