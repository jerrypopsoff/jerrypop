import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './Footer';
import { GlobalStyle } from '../constants/css/global-style';
import Home from './Home';
import Logo from './Logo';
import NotFound from './NotFound';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import RotateTheme from './RotateTheme';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../hooks/use-theme';

export default function App() {
  const [theme, rotateTheme] = useTheme();

  return (
    <>
      <GlobalStyle />
      <Router>
        <RotateTheme rotateTheme={rotateTheme} />
        <ScrollToTop />
        <Logo onToggleTheme={rotateTheme} theme={theme} />
        <Switch>
          <Route exact path="/">
            <Home onToggleTheme={rotateTheme} theme={theme} />
          </Route>
          <Route exact path="/recipes">
            <Recipes theme={theme} />
          </Route>
          <Route exact path="/purchase">
            <Purchase theme={theme} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer onToggleTheme={rotateTheme} />
      </Router>
    </>
  );
}
