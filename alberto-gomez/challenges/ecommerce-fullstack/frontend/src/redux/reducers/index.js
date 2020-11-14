import {combineReducers} from 'redux';
// importar todos nuestros reducers:
import bikeReducer from './bikeReducer';

const rootReducer = combineReducers({bikeReducer})

export default rootReducer;