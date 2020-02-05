import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import User from './components/User';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
