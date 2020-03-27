import { followConstants } from '../constants/follow.constants'
import { push } from 'connected-react-router'
import { followService } from '../services'

export const getFollows = () => {
    return dispatch =>{
        dispatch(getRequest());

        followService.getFollows()
        .then(
            data =>  dispatch(getSuccess(data)),
            error => dispatch(getFailure(error))
        )
    }
}

export const createFollow = (user_id) => {
    return dispatch => {
        followService.createFollow(user_id)
        .then(
            data => dispatch(createSuccess(data)),
            error => dispatch(createFailure(error))
        )
    }
}

export const removeFollow = (id) => {
    return dispatch => {
        followService.removeFollow(id)
        .then(
            data => dispatch(removeSuccess(id)),
            error => dispatch(removeFailure(error))
        )
    }
}


const getRequest = data => ({
    type: followConstants.GET_FOLLOW_REQUEST
})

const getSuccess = data => ({
    type: followConstants.GET_FOLLOW_SUCCESS,
    payload: data
})

const getFailure = error => ({
    type: followConstants.GET_FOLLOW_FAILURE,
    payload: error
})


const createSuccess = data => ({
    type: followConstants.CREATE_FOLLOW_SUCCESS,
    payload: data
})

const createFailure = error => ({
    type: followConstants.CREATE_FOLLOW_FAILURE,
    payload: error
})

const removeSuccess = data => ({
    type: followConstants.REMOVE_FOLLOW_SUCCESS,
    payload: data
})

const removeFailure = error => ({
    type: followConstants.REMOVE_FOLLOW_FAILURE,
    payload: error
})