import { combineReducers } from 'thunk';
import productReducer from './productReducer';

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
