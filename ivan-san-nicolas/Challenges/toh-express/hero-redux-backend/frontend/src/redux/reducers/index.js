import { combineReducers } from 'redux';
import heroesReducer from './heroReducer';

const rootReducer = combineReducers( {heroesReducer} );

export default rootReducer;