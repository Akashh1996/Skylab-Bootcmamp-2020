import { combineReducers } from 'redux';

import workoutReducer from './workoutReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ workoutReducer, usersReducer });

export default rootReducer;
