import { createStore, compose, applyMiddleware } from 'redux';
import reduxInmutableStateInvariant from 'redux-inmutable-state-invariant';
import rootReducer from './heroReducer';

export default function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxInmutableStateInvariant()))
	);
}
