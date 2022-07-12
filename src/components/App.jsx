import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './Footer';
import { GlobalStyle } from '../constants/css/global-style';
import Home from './Home';
import NotFound from './NotFound';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import ScrollToTop from './ScrollToTop';
import { useTheme } from '../hooks/use-theme';

export default function App() {
  const [theme, incrementTheme] = useTheme();

  const onToggleTheme = () => {
    incrementTheme();
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home theme={theme} onToggleTheme={onToggleTheme} />
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
        <Footer onToggleTheme={onToggleTheme} />
      </Router>
    </>
  );
}
