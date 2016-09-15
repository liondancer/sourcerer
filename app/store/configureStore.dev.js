import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import Thunk from 'redux-thunk'

// this is ran when the app first starts up so that the whole app has access to the redux store
// used at the entry point of the application

export default function configureStore(initialState) {
    // 3rd parameter allows for applying middleware
    return createStore(
        rootReducer,
        initialState,
        // middleware to display error when I try to mutate state
        // should only use in development
        applyMiddleware(Thunk, reduxImmutableStateInvariant()));
}