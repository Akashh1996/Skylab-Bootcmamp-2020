import { combineReducers } from 'redux';
import productReducer from './todoReducer';

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
