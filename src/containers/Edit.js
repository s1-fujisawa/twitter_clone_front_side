import { connect } from 'react-redux';
import Edit  from '../Components/Edit';
import { edit } from '../Actions/user.actions'

const mapStateToProps = (state, ownProps) => ({
    me: state.user
});

const mapDispatchToProps = dispatch => ({
    edit( name, nickname,email, password, password_confirmation) {
        dispatch(edit( name, nickname,email, password, password_confirmation));
    }
});

export default connect (mapStateToProps, mapDispatchToProps)(Edit)