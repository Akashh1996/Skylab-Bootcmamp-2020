import { combineReducers } from 'redux';

import usersReducer from './usersReducers';

const rootReducer = combineReducers({ usersReducer });

export default rootReducer;
