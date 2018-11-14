import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from 'containers/dashboard-page'
import SignInPage from 'containers/login-page'
import RegisterPage from 'containers/register-page'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default Routes;
