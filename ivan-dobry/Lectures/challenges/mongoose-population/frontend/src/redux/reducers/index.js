import { combineReducers } from 'redux';
import usersReducers from './usersReducers';

const rootReducer = combineReducers({ usersReducers });

export default rootReducer;
