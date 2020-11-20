import { combineReducers } from 'redux';

import userReducer from './usersReducers';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
