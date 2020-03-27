import { connect } from 'react-redux';
import FollowerListComponent  from '../Components/user/FollowerListComponent';
import { getFollower } from '../Actions/user.actions'
import { getFollows, createFollow, removeFollow } from '../Actions/follow.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    follower: state.follower,
    follow: state.follow
});

const mapDispatchToProps = dispatch => ({
    onMount(user_id, page) {
        dispatch(getFollower(user_id,page));
        dispatch(getFollows());
    },
    createFollow(user_id){
        dispatch(createFollow(user_id));
    },
    removeFollow(id){
        dispatch(removeFollow(id));
    },
    getFollower(user_id,page){
        dispatch(getFollower(user_id,page));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(FollowerListComponent)