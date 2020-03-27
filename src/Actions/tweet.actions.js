import { tweetConstants } from '../constants/tweet.constants'
import { push } from 'connected-react-router'
import { tweetService } from '../services'

export const getTweets = (page) => {
    return dispatch =>{
        dispatch(getRequest());

        tweetService.get_posts(page)
        .then(
            data =>  dispatch(getSuccess(data)),
            error => dispatch(getFailure(error))
        )
    }
}

export const getTweet = (id) => {
    return dispatch =>{
        dispatch(getRequest());

        tweetService.get_post(id)
        .then(
            data =>  dispatch(getSuccess(data)),
            error => dispatch(getFailure(error))
        )
    }
}


export const getUserTweets = (user_id) => {
    return dispatch =>{
        dispatch(getRequest());

        tweetService.get_user_posts(user_id)
        .then(
            data =>  dispatch(getSuccess(data)),
            error => dispatch(getFailure(error))
        )
    }
}

export const createTweets = (post) => {
    return dispatch => {
        //dispatch(getRequest());
        
        //tweetService.get_posts()
        tweetService.create_post(post)
        .then(
            data => dispatch(createSuccess(data)),
            error => dispatch(createSuccess(error))
        )
    }
}

export const removeTweet = (id) => {
    return dispatch => {
        tweetService.removePost(id)
        .then(
            data => dispatch(push('/Main')),
            error => dispatch(push('/Main'))
        )
    }
}


const getRequest = data => ({
    type: tweetConstants.GET_REQUEST
})

const getSuccess = data => ({
    type: tweetConstants.GET_SUCCESS,
    payload: data
})

const getFailure = error => ({
    type: tweetConstants.GET_FAILURE,
    payload: error
})


const createSuccess = data => ({
    type: tweetConstants.CREATE_SUCCESS,
    payload: data
})
