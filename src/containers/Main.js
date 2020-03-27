import { logoutAndRedirect } from '../Actions/auth.actions';
import { getMe, clearMe } from '../Actions/user.actions';
import { getTweets, createTweets} from '../Actions/tweet.actions';
import Main from '../Components/Main';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    tweet: state.tweet
});

const mapDispatchToProps = dispatch => ({
  onMount(page) {
    dispatch(getMe());
    dispatch(getTweets(page));
  },
  createTweets(post) {
    dispatch(createTweets(post));
  },
  logOut() {
    dispatch(clearMe());
    dispatch(logoutAndRedirect());
  },
  getTweets(page) {
    dispatch(getTweets(page))
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);