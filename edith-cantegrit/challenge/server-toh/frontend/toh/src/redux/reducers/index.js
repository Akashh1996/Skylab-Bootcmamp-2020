import { combineReducers } from 'redux';
import heroReducer from '../reducers/hero-reducer';

const rootReducer = combineReducers({ heroReducer });

export default rootReducer;