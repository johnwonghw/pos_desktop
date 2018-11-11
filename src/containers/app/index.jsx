import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import Page from 'containers/sign-in-page'

import 'antd/dist/antd.css';
import './_app.scss';

const store = createStore(
  combineReducers({
    ...rootReducer,
  }),
  applyMiddleware(logger),
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Page></Page>
      </Provider>
    );
  }
}

export default App;
