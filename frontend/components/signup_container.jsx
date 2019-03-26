import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session-form";
import { signup } from "../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign Up",
    errors: state.errors.session,
    link: <Link to={`/login`}>Sign In</Link>
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);