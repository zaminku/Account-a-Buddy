import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapStateToDispatch = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(
    mapStateToProps,
    mapStateToDispatch
)(NavBar));