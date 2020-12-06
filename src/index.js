import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";

import Landing from "./layouts/Landing";
import Signup from "./layouts/Signup"

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
      <Switch>
          {/*<Route path="/admin" component={Admin} />*/}
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);