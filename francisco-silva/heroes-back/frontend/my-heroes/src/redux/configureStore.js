import  {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers/'

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunk)),)
}