import { combineReducers } from 'redux';
import superReducer from './superReducer';

const rootReducers = combineReducers({ superReducer });

export default rootReducers;