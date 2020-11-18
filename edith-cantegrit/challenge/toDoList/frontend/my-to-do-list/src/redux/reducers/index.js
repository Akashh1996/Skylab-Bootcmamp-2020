import { combineReducers } from 'redux';
import toDoListReducer from '../reducers/toDoListReducer';

const rootReducer = combineReducers({ toDoListReducer });

export default rootReducer;
