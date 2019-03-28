import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { login } from "../../actions/session_actions";
import {receiveCurrentUser} from "../../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign In",
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: currentUser => dispatch(receiveCurrentUser(currentUser)),
    link: (<p>New to Emilysflix? 
        <Link to={`/signup`} 
        onClick={currentUser => dispatch(receiveCurrentUser(currentUser))} 
        className="signup-tag">
        Sign up now</Link>.
        </p>)
});


export default connect(msp, mdp)(SessionForm);

(currentUser) => dispatch(receiveCurrentUser(currentUser))