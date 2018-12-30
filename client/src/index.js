import React from 'react';
import ReactDOM from 'react-dom';

import store from './reduxStore';
import App from './app.js';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));

