import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exect={exact} render={(props) => (
        !loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to="this-is-emilysflix" />
        )
    )}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exect={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);


const msp = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));