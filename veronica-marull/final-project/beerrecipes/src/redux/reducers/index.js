import { combineReducers } from 'redux';
import beerReducer from './beerReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ beerReducer, authReducer });

export default rootReducer;
