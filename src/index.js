import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/app';
import * as serviceWorker from './serviceWorker';

// electron + react setup inspired by https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
// https://www.electron.build/multi-platform-build

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
