import React from 'react';
import { BrowserRouter,
  Switch,
  Route,
  Redirect } from 'react-router-dom';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
