import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { login } from "../../actions/session_actions";
import {clearErrors} from "../../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign In",
    errors: state.errors.session,
    link: (<p>New to Emilysflix? <Link to={`/`} 
        className="signup-tag">
        Sign up now
        </Link>.
        </p>)
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(msp, mdp)(SessionForm);

// (currentUser) => dispatch(receiveCurrentUser(currentUser))