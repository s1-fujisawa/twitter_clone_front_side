import { connect } from 'react-redux';
import SignUp  from '../Components/SignUp';
import { signup } from '../Actions/auth.actions'

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    signup(account_id , name, email, password, password_confirmation) {
        dispatch(signup(account_id , name, email, password, password_confirmation));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(SignUp)