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

4. Create an index.js file in the /reducers folder, and create a dummy reducer file.

```
// @ /reducer/index.js

import { combineReducers } from 'redux';

import test_reducer from './ex_reducer';

const allReducers = combineReducers({
  boolean: test_reducer, 
});

export default allReducers;
```

The file above will import the file below, 
and use its return value as the Redux's Store's state
stored under the key which we name 'boolean'.


``` 
// @ /reducers/ex_reducer.js
export default function (state = true, action) {
  switch (action.type) {
    case 'SWITCH_BOOLEAN':
      return action.payload;
    default:
      return state;
  }
}
```

Note that it is important to have some default value 
in the function's parameter for the state. Including
a default value within the parameters is es6 syntax.

5. Create Containers to connect components to the Store.
6. create some action that interacts with the state.
7. celebrate: you just build a react-redux environment from scratch.

# to run app locally

`npm i`

`npm start`



