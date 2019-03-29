import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { receiveCurrentUser } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const msp = state => ({
    formType: "Sign Up",
    errors: state.errors.session,
    link: <nav>
        <Link to={`/login`}
        >Sign In
        </Link>
        </nav>
});

const mdp = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: currentUser => dispatch(receiveCurrentUser(currentUser))
});

export default connect(msp, mdp)(SessionForm);