/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
}
