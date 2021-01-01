import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = window.__REXUS_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducers, 
        initialState, 
        composeEnhancers(applyMiddleware(thunk)));
}