import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {auth} from './auth.reducer'
import {user} from './user.reducer'
import {otherUser} from './otherUser.reducer'
import {tweet} from './tweet.reducer'
import {search} from './search.reducer'
import {follow} from './follow.reducer'
import {followUser} from './followUser.reducer'
import {follower} from './follower.reducer'

//const rootReducer = (state = {}) => state;
//export default rootReducer
export default history => combineReducers({
    router: connectRouter(history),
    auth: auth,
    user: user,
    otherUser: otherUser,
    tweet: tweet,
    search: search,
    follow: follow,
    followUser: followUser,
    follower: follower,
  });

//export * from './auth.reducer';