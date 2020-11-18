import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({ todoListReducer });

export default rootReducer;
