import { combineReducers } from 'redux';

import projectsReducer from './projectReducer';
import usersReducer from './userReducer';

const rootReducer = combineReducers({ projectsReducer, usersReducer });

export default rootReducer;
