import { combineReducers } from 'redux';
import heroes from './heroReducer';

const rootReducer = combineReducers({
    heroes
});

export default rootReducer;