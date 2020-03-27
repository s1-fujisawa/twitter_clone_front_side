import { followUserConstants } from '../constants';

const initialState = {
    loading: false,
    followUser: {},
    totalUsers: null,
};

export function followUser(state = initialState, action){
    switch (action.type) {
        case followUserConstants.GET_FOLLOW_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case followUserConstants.GET_FOLLOW_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                followUser: action.payload.users,
                totalUsers: action.payload.totalUser,
            }
        case followUserConstants.GET_FOLLOW_USER__FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }; 
        default:
            return state
    }
}

