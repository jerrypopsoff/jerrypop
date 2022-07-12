import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './Footer';
import { GlobalStyle } from '../constants/css/global-style';
import Home from './Home';
import NotFound from './NotFound';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import ScrollToTop from './ScrollToTop';
import { initializeClickPop } from '../utilities/click-pop';
import { logAsciiArt } from '../utilities/console-ascii-art';
import { toggleTheme } from '../utilities/theme';

export default function App() {
  initializeClickPop(document);
  toggleTheme();
  logAsciiArt();

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/purchase">
            <Purchase />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
