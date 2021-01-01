import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ itemsReducer, cartReducer });

export default rootReducer;
