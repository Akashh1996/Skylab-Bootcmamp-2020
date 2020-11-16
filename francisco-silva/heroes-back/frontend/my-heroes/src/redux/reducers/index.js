import {combineReducers} from 'redux';
import heroesList from './heroReducers';

const rootReducer = combineReducers({
    heroesList,
});
export default rootReducer;

