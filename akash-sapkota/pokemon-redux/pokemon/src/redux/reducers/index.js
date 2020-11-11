import { combineReducers } from 'redux';
//importar todos nouestros reducers
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;
