import { combineReducers } from 'redux';
import gitReducer from './gitReducer';

const rootReducer = combineReducers({ gitReducer });

export default rootReducer;
