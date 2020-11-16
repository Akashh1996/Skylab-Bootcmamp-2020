import { combineReducers } from 'redux';
//importar todos nouestros reducers
import heroReducer from './heroReducer';

const rootReducer = combineReducers({ heroReducer });

export default rootReducer;
