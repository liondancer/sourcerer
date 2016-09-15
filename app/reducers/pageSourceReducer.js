import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function pageSourceReducer(state=initialState.payload, action) {
    // takes current state and action and returns a new state
    switch (action.type) {
        case types.GET_PAGE_SOURCE_SUCCESS:
            return Object.assign({}, action.payload);

        case types.GET_PAGE_SOURCE_FAILURE:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}