import { userService } from '../services';
import { userConstants, searchConstants, otherUserConstants, followUserConstants, followerConstants } from '../constants/index';
import { user } from '../reducers/user.reducer';
import { push } from 'connected-react-router'

export const getMe = () => {
    return dispatch => {
        dispatch(getMeRequest());

        userService.getMe()
            .then(
                data => dispatch(getMeSuccess(data)),
                error => dispatch(getMeFailure(error))
        );
    };
}

export const edit = (name, nickname, email, password, password_confirmation) => {
    return dispatch =>{

        userService.edit( name, nickname, email, password, password_confirmation)
        .then(
            data => {
                dispatch(push('/Main'));
            },
            error => {
                dispatch(push('/Main'));
            }
        )
    }
}


export const getUserInfo = (id) => {
    return dispatch => {
    
        dispatch(getOtherUserRequest());

        userService.getUserInfo(id)
        .then(
            data => dispatch(getOtherUserSuccess(data)),
            error => dispatch(getOtherUserFailure(error))
        )
    }
}

export const followUser = (user_id) =>{
    return dispatch => {
    
       

        userService.follow(user_id)
        .then(
            data => dispatch(getOtherUserSuccess(data)),
            error => dispatch(getOtherUserFailure(error))
        )
    }
}

export const removeFollowUser = (user_id) =>{
    return dispatch => {
    
        userService.follow(user_id)
        .then(
            data => dispatch(getOtherUserSuccess(data)),
            error => dispatch(getOtherUserFailure(error))
        )
    }
}

export const search = (search, page) => {

    return dispatch => {
        dispatch(searchRequest());
        userService.Search(search, page)
        .then(
            data => dispatch(searchSuccess(data)),
            error => dispatch(searchFailure(error))
        )
    }
}

export const getFollowUser = (user_id, page) =>{
    return dispatch => {
        dispatch(getfollowUserRequest());
        userService.getFollowUser(user_id, page)
        .then(
            data => dispatch(getfollowUserSuccess(data)),
            error => dispatch(getfollowUserFailure(error))
        )
    }
}


export const getFollower = (user_id, page) =>{
    return dispatch => {
        dispatch(getfollowerRequest());
        userService.getFollower(user_id, page)
        .then(
            data => dispatch(getfollowerSuccess(data)),
            error => dispatch(getfollowerFailure(error))
        )
    }
}

const getMeRequest = () => ({
    type: userConstants.GET_ME_REQUEST
});

const getMeSuccess =(data) => ({
    type: userConstants.GET_ME_SUCCESS,
    payload: data
});

const getMeFailure = (error) => ({
    type: userConstants.GET_ME_FAILURE,
    error
});

export const clearMe = () => ({
    type: userConstants.CLEAR_ME
});


const getOtherUserRequest = () => ({
    type: otherUserConstants.GET_OTHER_USER_REQUEST
});

const getOtherUserSuccess =(data) => ({
    type: otherUserConstants.GET_OTHER_USER_SUCCESS,
    payload: data
});

const getOtherUserFailure = (error) => ({
    type: otherUserConstants.GET_OTHER_USER_FAILURE,
    error
});

export const clearOtherUser = () => ({
    type: otherUserConstants.CLEAR_OTHER_USER
});

const searchRequest = () => ({
    type: searchConstants.SEARCH_REQUEST,
});

const searchSuccess =(data) => ({
    type: searchConstants.SEARCH_SUCCESS,
    payload: data
});

const searchFailure = (error) => ({
    type: searchConstants.SEARCH_FAILURE,
    error
});

const getfollowUserRequest = () => ({
    type: followUserConstants.GET_FOLLOW_USER_REQUEST,
});

const getfollowUserSuccess =(data) => ({
    type: followUserConstants.GET_FOLLOW_USER_SUCCESS,
    payload: data
});

const getfollowUserFailure = (error) => ({
    type: followUserConstants.GET_FOLLOW_USER__FAILURE,
    error
});

const getfollowerRequest = () => ({
    type: followerConstants.GET_FOLLOWER_REQUEST,
});

const getfollowerSuccess =(data) => ({
    type: followerConstants.GET_FOLLOWER_SUCCESS,
    payload: data
});

const getfollowerFailure = (error) => ({
    type: followerConstants.GET_FOLLOWER_FAILURE,
    error
});