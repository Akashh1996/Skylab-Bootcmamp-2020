import { combineReducers } from 'redux';

import projectsReducer from './projectReducer';

const rootReducer = combineReducers({ projectsReducer });

export default rootReducer;
