# react-redux-tutorial

How I would explain react + redux to a newcomer. 


# basic workflow set up

#### 1. `npm install -S redux react-redux` 

#### 2. Create folders as such in /src folder:

![alt text](images/folder-structure.png)

#### 3. Set up your Provider, createStore, and allReducers as seen in the index.js entry point file.

```javascript
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

#### 4. Create an index.js file in the /reducers folder, and create a dummy reducer file.

```javascript
// @ /reducer/index.js

import { combineReducers } from 'redux';

import test_reducer from './ex_reducer';

const allReducers = combineReducers({
  boolean: test_reducer, 
});

export default allReducers;
```

The file above will import the file below. 

The file above uses the /ex_reducer.js return value as the Redux's Store's state
stored under the key which we name 'boolean'.


```javascript
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

Note the default value in the function's parameter for the state (=true).

#### 5. Create Containers to connect components to the Store.

```javascript
// @ /containers/AppContainer.js

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { switchBoolean } from '../actions/ex_action';

import App from '../components/App';

function mapStateToProps(state) {
  return {
    boolean: state.boolean,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      switchBoolean 
    }, 
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
```

The "container" code is responsible for giving a component access to the Store state. 

This is where the `react-redux` node module comes into play: giving us access to the `connect()` function seen at the bottom, where the component is connected to the Store.

The container is then responsible for three main things:
  * mapStateToProps: list the part of the Store state we want to access in the component.
  * matchDispatchToProps: list "actions" (functionality) for the component.
  * connect: connect the component to the Store.

Now the store state and functionality are accessible in the component through its `props`, e.g.:
  * `this.props.boolean` => the part of the Store state we gave it access to.
  * `this.props.switchBoolean` => the function we gave it access to.

#### 6. Create an action that interacts with the state.

```javascript
// @ /actions/ex_action.js

export const switchBoolean = (boolean) => ({
  type: 'SWITCH_BOOLEAN',
  payload: !boolean,
});
```
Note a few things:
  * The action must return an object literal.
  * The object literal must at least have a 'type' key (even when no reducer responds to it).
  * The 'payload' key is what holds the value for the new state for the reducers that handle this 'type' (as seen above in step 4).

#### 7. Celebrate: you just built a react-redux environment from scratch.

# To run app locally

`npm i`

`npm start`



