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
          <Home heading="Poppin’ off with Jerry">
            Pick up an{' '}
            <a
              href="https://www.amazon.com/gp/product/B01G7DM3G2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01G7DM3G2&linkCode=as2&tag=jerry04c-20&linkId=ca82b9da5246d1a9a2e398a2d6be50c2"
              rel="noopener noreferrer"
              target="_blank"
            >
              air popper
            </a>{' '}
            and an enormous bowl before you do anything else.
          </Home>
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
