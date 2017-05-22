import { combineReducers } from 'redux';

import testReducer from './testReducer';

const allReducers = combineReducers({
  bool: testReducer, 
});

export default allReducers;