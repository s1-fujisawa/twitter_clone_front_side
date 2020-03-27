import { followConstants } from '../constants';

const initialState = {
    loading: false,
    follow: {}
};

export function follow(state = initialState, action){
    switch (action.type) {
        case followConstants.GET_FOLLOW_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case followConstants.GET_FOLLOW_SUCCESS:
            return {
                ...state,
                loading: false,
                follow: action.payload,
            }
        case followConstants.GET_FOLLOW_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case followConstants.CREATE_FOLLOW_SUCCESS:
            const newFollow = state.follow.slice();
            newFollow.push(action.payload);
            return {
                ...state,
                follow: newFollow,
            };
        case followConstants.CREATE_FOLLOW_FAILURE:
            return {
                ...state,
                error: true,
            };
        case followConstants.REMOVE_FOLLOW_SUCCESS:
            const newFollw = state.follow.filter(x => x.id !== action.payload);;
            return {
                ...state,
                follow: newFollw,
            };
        case followConstants.REMOVE_FOLLOW_FAILURE:
            return {
                ...state,
                error: true,
            };
        
        default:
            return state
    }
}

