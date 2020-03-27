import { followerConstants } from '../constants';

const initialState = {
    loading: false,
    followerUser: {},
    totalUsers: null,
};

export function follower(state = initialState, action){
    switch (action.type) {
        case followerConstants.GET_FOLLOWER_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case followerConstants.GET_FOLLOWER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                followerUser: action.payload.users,
                totalUsers: action.payload.totalUser,
            }
        case followerConstants.GET_FOLLOWER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }; 
        default:
            return state
    }
}

