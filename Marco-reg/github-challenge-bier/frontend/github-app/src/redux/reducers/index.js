import { combineReducers } from 'redux';

import listReducers from './listReducers';

const rootReducer = combineReducers({ listReducers });

export default rootReducer;
