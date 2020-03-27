import { authConstants } from '../constants';

let token = localStorage.getItem('token');
let client = localStorage.getItem('client');
let uid = localStorage.getItem('uid');
const initialState = token ?
{
  loggingIn: false,
  loggedIn: true,
  token: token,
  client: client,
  uid: uid,
  error: false,
}
: {
  loggingIn: false,
  loggedIn: false,
  token: null,
  client: null,
  uid: null,
  error: false,
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        error: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.payload["access-token"],
        client: action.payload["client"],
        uid: action.payload["uid"],
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        client: null,
        uid: null,
        error: false
      };
    default:
      return state
  }
}