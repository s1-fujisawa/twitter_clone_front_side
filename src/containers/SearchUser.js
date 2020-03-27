import { connect } from 'react-redux';
import SearchComponent  from '../Components/search/SearchComponent';
import { search } from '../Actions/user.actions'
import { getFollows, createFollow, removeFollow } from '../Actions/follow.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user,
    result: state.search,
    follow: state.follow
});

const mapDispatchToProps = dispatch => ({
    onMount(searchVal, page) {
        dispatch(search(searchVal,page));
        dispatch(getFollows());
    },
    createFollow(user_id){
        dispatch(createFollow(user_id));
    },
    removeFollow(id){
        dispatch(removeFollow(id));
    },
    search(searchVal,page){
        dispatch(search(searchVal,page));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(SearchComponent)