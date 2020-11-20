/* eslint-disable import/no-extraneous-dependencies */
import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducer';

const initialState = {};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
