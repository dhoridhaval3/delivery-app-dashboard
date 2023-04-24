import { combineReducers } from 'redux';
import Test from './Test';

const rootReducer = combineReducers({
  test: Test,
});

export default rootReducer;
