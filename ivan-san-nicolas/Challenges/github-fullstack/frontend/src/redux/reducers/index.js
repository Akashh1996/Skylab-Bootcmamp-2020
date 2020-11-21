import { combineReducer } from 'redux';
import gitReducer from './gitReducer';

const rootReducer = combineReducer({ gitReducer });

export default rootReducer;
