import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index.js';

// IMPORT THE CONTAINERS !!!!! (not the component)
import AppContainer from './containers/AppContainer';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
