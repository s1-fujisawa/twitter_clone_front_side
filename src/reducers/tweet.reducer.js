import { tweetConstants } from '../constants';

const initialState = {
    loading: false,
    postdata: {},
    totalTweets: null
};

export function tweet(state = initialState, action){
    switch (action.type) {
        case tweetConstants.GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case tweetConstants.GET_SUCCESS:
            return {
                ...state,
                loading: false,
                postdata: action.payload.data.tweets,
                totalTweets: action.payload.data.totalTweets,
            }
        case tweetConstants.GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case tweetConstants.CREATE_SUCCESS:
            const newPosts = state.postdata.slice();
            newPosts.unshift(action.payload.data);
            return {
                ...state,
                postdata: newPosts,
            }
        default:
            return state
    }
}

