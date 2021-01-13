import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import {
  challengeCreateReducer,
  challengeDetailsReducer,
  challengeListReducer,
  deleteChallengeReducer,
} from './reducers/challengeReducer';

import userReducer from './reducers/userReducer';

import { readActiveUser } from './actions/user-actions';

const initialState = {};

const reducer = combineReducers({
  challengeList: challengeListReducer,
  challengeDetails: challengeDetailsReducer,
  user: userReducer,
  challengeCreate: challengeCreateReducer,
  deleteChallenge: deleteChallengeReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
  readActiveUser()(store.dispatch);
  return store;
}
