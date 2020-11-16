import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
	debugger;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxInmutableStateInvariant(), thunk))
	);
}
