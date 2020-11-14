import { combineReducers } from 'redux';
//importar todos nouestros reducers
import productReducer from './productReducer';

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
