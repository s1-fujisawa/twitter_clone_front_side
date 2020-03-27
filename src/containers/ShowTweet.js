import { logoutAndRedirect } from '../Actions/auth.actions';
import { getMe, clearMe } from '../Actions/user.actions';
import { getTweet, removeTweet} from '../Actions/tweet.actions';
import showTweet from '../Components/tweet/ShowTweetComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    tweet: state.tweet
});

const mapDispatchToProps = dispatch => ({
  onMount(id) {
    dispatch(getTweet(id));
  },
  removeTweet(id){
    dispatch(removeTweet(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(showTweet);