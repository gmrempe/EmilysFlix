import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Link} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from "./splash/splash";

const App = () => (
    <div>
        <h1>Welcome to EmilysFlix</h1>

        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        {/* <ProtectedRoute exact path="/browse" component={}/> */}
        <Route path="/this-is-emilysflix" component={Splash}/>
    </div>
);

export default App;