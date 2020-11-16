import { combineReducers } from 'redux';
import marketReducer from './marketReducer';

const rootReducer = combineReducers({ marketReducer });

export default rootReducer;
