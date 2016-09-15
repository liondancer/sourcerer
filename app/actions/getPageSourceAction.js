import * as types from "./actionTypes";
import $ from 'jquery';

export function getPageSourceFailure(payload) {
    return {
        type: types.GET_PAGE_SOURCE_FAILURE,
        payload
    };
}

export default function getPageSourceSuccess(payload) {
    return {
        type: types.GET_PAGE_SOURCE_SUCCESS,
        payload
    }
}

// Action creator - functions that create actions
export function getPageSource(url) {
    // thunk
    return dispatch => {
        let payload = { url };
        $.ajax({
            method: 'GET',
            url: '/pageSource',
            data: {
                url
            },
            success: (payload) => {
                console.log('Payload received');
                if (payload.error) {
                    return dispatch(getPageSourceFailure(payload));
                }
                return dispatch(getPageSourceSuccess(payload));
            },
            error: (error) => {
                return dispatch(getPageSourceFailure(payload));
            }
        });
    };
}



