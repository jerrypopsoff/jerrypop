import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Purchase from './components/Purchase';
import React from 'react';
import Recipes from './components/Recipes';
import { initializeClickPop } from './utilities/ClickPop';

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
