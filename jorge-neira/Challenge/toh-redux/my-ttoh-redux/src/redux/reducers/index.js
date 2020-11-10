import { combineReducers } from 'redux';
import heroes from './heroReducers';
const rootReducer = combineReducers({
	heroes
});

export default rootReducer;
