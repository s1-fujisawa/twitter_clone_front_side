import { connect } from 'react-redux';
import Login from '../Components/Login';
import { login } from '../Actions/auth.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user
});

const mapDispatchToProps = dispatch => ({
    login(username, password) {
        dispatch(login(username, password));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(Login)