import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ charactersReducer, usersReducer });

export default rootReducer;
