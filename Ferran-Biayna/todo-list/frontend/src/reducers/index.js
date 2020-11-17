import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';

const rootReducer = combineReducers({
  toDoReducer,
});

export default rootReducer;
