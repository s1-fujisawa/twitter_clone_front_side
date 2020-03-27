import { otherUserConstants } from '../constants';

const initialState = {
    loading: false,
    info: {}
};

export function otherUser(state = initialState, action){
    switch (action.type) {
        case otherUserConstants.GET_OTHER_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case otherUserConstants.GET_OTHER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload,
            }
        case otherUserConstants.GET_OTHER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case otherUserConstants.CLEAR_OTHER_USER:
            return {
                ...state,
                info: {},
            }
        default:
            return state
    }
}
