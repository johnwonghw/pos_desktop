import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from 'containers/home-page'
import SignInPage from 'containers/sign-in-page'
import RegisterPage from 'containers/register-page'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/register" component={RegisterPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
