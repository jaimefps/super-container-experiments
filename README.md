# react-redux-tutorial

How I would explain react + redux to a newcomer. 


# basic workflow set up

#### NOTE: This tutorial must be fully completed for the application to work. Soon I will write a more detailed explanation of the workflow for Redux-React set up.

#### 1. `npm install -S redux react-redux` 

#### 2. Create the following folder structure inside the /src folder:

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

  * The `<Provider>` gives the whole application access to the Store.
  * `createStore` builds the Store out of all the joined reducers (more on them later).
  * `allReducers` is the group of joined reducers that we import to build the Store.


#### 4. Create an index.js file in the /reducers folder, and create a dummy reducer file.

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

The above file is an example of a "reducer": a function-file that is responsible for managing some aspect of the Store. In this tutorial, the reducer will be responsible for managing a boolean. 

Note the default value in the function's parameter where `state = true`


```javascript
// @ /reducer/index.js

import { combineReducers } from 'redux';

import test_reducer from './ex_reducer';

const allReducers = combineReducers({
  boolean: test_reducer, 
});

export default allReducers;
```

The reducer's index.js file is responsible for joining all the redcuer function-files into a single group that we import into the entry point of the application as mentioned in step 3. 

We save each reducer-file under some key (in this case "boolean"). Hence, the return value of each reducer is kept in the Store under the key name that we give it in the reducer's index.js file. 

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
Each "container" file is responsible for three main things:
  * `mapStateToProps`: list the part of the Store state we want to access in the component.
  * `matchDispatchToProps`: list "actions" (functionality) for the component.
  * `connect`: connect the component to the Store (bottom line of code).

Now the Store state and desired functionality are accessible in the App.js component through its `props`:
  * `this.props.boolean` => the part of the Store state we gave it access to; i.e., `state.boolean`
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

  Note that the ex_reducer.js file in step 4 has a case for `SWITCH_BOOLEAN`, that is how the Store knows what state key should be affected by an action's payload. 
  
  Hence, all reducer functions that contain a `SWITCH_BOOLEAN` case will be affected by this action. 

#### 7. Now you can use the function in your component, and affect the Store with it!

The component has access to the function by means of `this.props.switchBoolean`, and the Store key `boolean` is now within its scope of influence. 

You can now switch the boolean value with a button that invokes the function and takes `this.props.boolean` as the parameter, which is in fact the Store's 'boolean'.

```javascript
// @ components/App.js

import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{ marginTop: '25%', marginLeft: '50%' }}>
        <button onClick={() => this.props.switchBoolean(this.props.boolean)}> ! </button>
        {JSON.stringify(this.props.boolean)}
      </div>
    );
  }
}

export default App;
```
# To run app locally

`npm i`

`npm start`



