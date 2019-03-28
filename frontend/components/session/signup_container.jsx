import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { receiveCurrentUser } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign Up",
    errors: state.errors.session
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: currentUser => dispatch(receiveCurrentUser(currentUser)),
    link: <nav>
        <Link to={`/login`}
        onClick={currentUser => dispatch(receiveCurrentUser(currentUser))}
        >Sign In
        </Link>
        </nav>
});

export default connect(msp, mdp)(SessionForm);