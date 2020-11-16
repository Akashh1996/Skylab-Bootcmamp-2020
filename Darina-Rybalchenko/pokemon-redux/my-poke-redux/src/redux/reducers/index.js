import { combineReducers } from 'redux';
// import todos nuestros reducers
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({ pokeReducer });

export default rootReducer;