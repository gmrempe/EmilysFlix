import React from 'react';
import LoginFormContainer from './login_container.jsx';
import SignupFormContainer from './signup_container.jsx';
import {Route, Link} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from "./splash";

const App = () => (
    <div>
        <h1>Welcome to EmilysFlix</h1>

        <Route path="this-is-emilysflix" component={Splash}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;