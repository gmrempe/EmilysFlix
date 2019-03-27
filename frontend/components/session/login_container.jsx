import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign In",
    errors: state.errors.session,
    link: <Link to={`/signup`}>Sign Up</Link>
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);