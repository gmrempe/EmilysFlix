import { connect } from "react-router-dom";
import SessionForm from './session-form'
import { login } from "../actions/session_actions";

const msp = state => ({
    user: {email: state.currentUser},
    formType: "Sign In",
    errors: state.errors
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);