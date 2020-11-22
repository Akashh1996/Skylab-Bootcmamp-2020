import { combineReducers } from 'redux';
//importar toos nuestros reducers
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;
