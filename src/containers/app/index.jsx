import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { Router } from "react-router-dom";

import rootReducer from './reducers';
import rootSagas from './sagas';

import 'antd/dist/antd.css';
import './_app.scss';

const history = createHistory();
const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...rootReducer,
  }),
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
