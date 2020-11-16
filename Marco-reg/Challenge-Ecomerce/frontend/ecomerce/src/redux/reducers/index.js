import {combineReducers} from 'redux'
import productReducer from './comerceReducers';

const rootReducer=combineReducers({productReducer});

export default rootReducer;