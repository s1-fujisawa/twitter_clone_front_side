import { authConstants } from '../constants/auth.constants'
import { push } from 'connected-react-router'
import { userService } from '../services'

export const login = (email, password) => {
    return dispatch =>{
        dispatch(loginRequest({ email }));

        userService.login(email, password)
        .then(
            data => {
                dispatch(loginSuccess(data));
                dispatch(push('/Main'));
            },
            error => {
                dispatch(loginFailure(error));
            }
        )
    }
}

export const signup = (account_id , name, email, password, password_confirmation) => {
    return dispatch =>{

        userService.signup(account_id , name, email, password, password_confirmation)
        .then(
            data => {
                dispatch(push('/'));
            },
            error => {
                dispatch(loginFailure(error));
            }
        )
    }
}

export const changePassword = (password, password_confirmation) => {
    return dispatch =>{

        userService.changePassword(  password, password_confirmation)
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

export const logoutAndRedirect = () => {
    console.log("logoutAndRedirect")
    return dispatch => {
        userService.logout();
        dispatch(logout());
        dispatch(push('/'))
    }
}

const logout = () => ({
    type: authConstants.LOGOUT
})

const loginRequest = data => ({
    type: authConstants.LOGIN_REQUEST
})

const loginSuccess = data => ({
    type: authConstants.LOGIN_SUCCESS,
    payload: data
})

const loginFailure = error => ({
    type: authConstants.LOGIN_FAILURE,
    payload: error
})

