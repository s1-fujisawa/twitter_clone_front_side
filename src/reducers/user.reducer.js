import { userConstants } from '../constants';

const initialState = {
    loading: false,
    info: {}
};

export function user(state = initialState, action){
    switch (action.type) {
        case userConstants.GET_ME_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case userConstants.GET_ME_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload,
            }
        case userConstants.GET_ME_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case userConstants.CLEAR_ME:
            return {
                ...state,
                info: {},
            }
        default:
            return state
    }
}
