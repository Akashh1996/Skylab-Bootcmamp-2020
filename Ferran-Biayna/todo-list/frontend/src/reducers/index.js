import { combineReducers } from 'redux';
import toDo from './toDoReducer';

const rootReducer = combineReducers({
  toDo,
});

export default rootReducer;
