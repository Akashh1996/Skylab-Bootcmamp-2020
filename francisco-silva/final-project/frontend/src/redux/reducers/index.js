import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

import productsReducers from './productsReducers';

import authReducer from './authReducer';

const rootReducer = combineReducers({ productsReducers, cartReducer, authReducer });

export default rootReducer;
