import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Landing from "./layouts/Landing"
import Signup from "./layouts/Signup"
import Signin from "./layouts/Signin"
import Admin from "./layouts/Admin"

import {AccountProvider} from './stores/AccountStore';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
      <Switch>
          <AccountProvider>
              <Route path="/" exact component={Landing} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/admin" component={Admin} />
          </AccountProvider>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);