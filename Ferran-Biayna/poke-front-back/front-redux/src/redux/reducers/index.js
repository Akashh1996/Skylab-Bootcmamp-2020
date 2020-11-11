import { combineReducers } from 'redux';
// importar todos nuestros reducers
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;
