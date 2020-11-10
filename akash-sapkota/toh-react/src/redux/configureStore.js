import { func } from 'prop-types';
import thunkMiddleWare from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initialState) {
	const compostEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		initialState,
		/* 		compostEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
		 */ compostEnhancers(applyMiddleware(thunkMiddleWare))
	);
}
