import { combineReducers } from 'redux';
import heroes from './heroReducer'; //le puedo poner cualquier nombre (heroes)

const rootReducer = combineReducers({
	heroes
});

export default rootReducer;
