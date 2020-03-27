import { logoutAndRedirect } from '../Actions/auth.actions';
import { getUserInfo } from '../Actions/user.actions';
import { getUserTweets } from '../Actions/tweet.actions';
import UserInfo from '../Components/UserInfo';
import { connect } from 'react-redux';
import { getFollows, createFollow, removeFollow } from '../Actions/follow.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    userInfo: state.otherUser,
    tweet: state.tweet,
    follow: state.follow,
});

const mapDispatchToProps = dispatch => ({
  onMount(id, page) {
    dispatch(getUserInfo(id));
    dispatch(getUserTweets(id, page));
    dispatch(getFollows());
  },
  createFollow(user_id){
    dispatch(createFollow(user_id));
  },
  removeFollow(id){
      dispatch(removeFollow(id));
  },
  getUserTweets(id, page){
    dispatch(getUserTweets(id, page));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);