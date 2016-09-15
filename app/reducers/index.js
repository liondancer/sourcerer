import { combineReducers } from 'redux';
import pageSource from './pageSourceReducer';
import initialState from './initialState';

const rootReducers = combineReducers({
    // within container components you can call state.pageSource
    pageSource,

});

export default rootReducers