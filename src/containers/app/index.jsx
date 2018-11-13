import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import rootSagas from './sagas';

import 'antd/dist/antd.css';
import './_app.scss';

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
        <Routes />
      </Provider>
    );
  }
}

export default App;
