import {combineReducers} from 'redux';
import todoReducer from '../reducers/todoReducer';

const rootReducer = combineReducers({todoReducer});

export default rootReducer;