import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";
import Splash from './splash';

const mdp = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(null, mdp)(Splash);