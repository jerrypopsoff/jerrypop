import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import React from 'react';
import User from './components/User';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <User />
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
