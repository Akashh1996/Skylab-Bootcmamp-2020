import { combineReducers } from 'redux';
import githubReducer from '../reducers/github-reducer';

const rootReducer = combineReducers({ githubReducer });

export default rootReducer;