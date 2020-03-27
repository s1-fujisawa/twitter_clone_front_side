import { connect } from 'react-redux';
import FollowUserListComponent  from '../Components/user/FollowUserListComponent';
import { getFollowUser } from '../Actions/user.actions'
import { getFollows, createFollow, removeFollow } from '../Actions/follow.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    followUser: state.followUser,
    follow: state.follow
});

const mapDispatchToProps = dispatch => ({
    onMount(user_id, page) {
        dispatch(getFollowUser(user_id, page));
        dispatch(getFollows());
    },
    createFollow(user_id){
        dispatch(createFollow(user_id));
    },
    removeFollow(id){
        dispatch(removeFollow(id));
    },
    getFollowUser(user_id, page){
        dispatch(getFollowUser(user_id, page));
    }

});

export default connect (mapStateToProps, mapDispatchToProps)(FollowUserListComponent)