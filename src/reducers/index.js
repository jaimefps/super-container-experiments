import { combineReducers } from 'redux';

import bool_reducer from './bool_reducer';
import num_reducer from './num_reducer';

const rootReducer = combineReducers({
  boolean: bool_reducer,
  number: num_reducer,
});

export default rootReducer;