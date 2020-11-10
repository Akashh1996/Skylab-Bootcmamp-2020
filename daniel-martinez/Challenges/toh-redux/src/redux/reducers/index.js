import { combineReducers } from 'redux';
import heroes from './heroReducer';

const rootReducer = combineReducers({
	heroes
	//more reducers
});

export default rootReducer;
