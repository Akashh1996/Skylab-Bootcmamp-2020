/* istanbul ignore file */

import { combineReducers } from 'redux';
import todoList from './todoListReducer';

const rootReducer = combineReducers({
  todoList,
});

export default rootReducer;
