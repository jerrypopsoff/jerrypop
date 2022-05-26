import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Purchase from './Purchase';
import React from 'react';
import Recipes from './Recipes';
import { initializeClickPop } from '../utilities/click-pop';

export default function App() {
  initializeClickPop(document);

  return (
    <Router>
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
          <Home heading="Whoops! Someone spilled the kernels.">
            That page does not exist.
          </Home>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
