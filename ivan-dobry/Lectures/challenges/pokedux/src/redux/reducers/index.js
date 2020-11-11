import { combineReducers } from 'redux';
import pokeReducer from './pokeReducers';

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;
