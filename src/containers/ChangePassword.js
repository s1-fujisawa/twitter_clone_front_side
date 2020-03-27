import { connect } from 'react-redux';
import ChangePassword  from '../Components/ChangePassword';
import { changePassword } from '../Actions/auth.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user
});

const mapDispatchToProps = dispatch => ({
    changePassword( name, nickname,email, password, password_confirmation) {
        dispatch(changePassword( name, nickname,email, password, password_confirmation));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(ChangePassword)