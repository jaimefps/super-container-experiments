# react-redux-tutorial

how i'd explain react + redux to someone


# basic workflow set up

1. `npm install -S redux react-redux` 

2. Create folders as such in /src folder:

![alt text](images/folder-structure.png)

3. Set up your Provider, createStore, and allReducers as seen in the index.js entry point file.

```
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
```



4. create the index.js in the reducer folder, and create a dummy reducer file.
5. make container to connect component to the Store, and check to see if the component can log the state.
6. create some action that interacts with the state.
7. celebrate: you just build a react-redux environment from scratch.

# to run app locally

`npm i`

`npm start`



