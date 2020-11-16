import { combineReducers } from 'redux';
import sabersReducer from './sabersReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ sabersReducer, cartReducer });

export default rootReducer;
