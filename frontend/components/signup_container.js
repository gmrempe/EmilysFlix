import { connect } from "react-router-dom";
import SessionForm from "./session-form";
import { signup } from "../actions/session_actions";


const msp = () => ({
    user: {email: ""},
    formType: "Sign Up",
    errors: state.errors
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);