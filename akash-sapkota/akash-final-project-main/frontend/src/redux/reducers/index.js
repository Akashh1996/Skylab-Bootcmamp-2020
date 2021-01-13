import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ questionReducer, userReducer });

export default rootReducer;
