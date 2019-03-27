import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Link, Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute, LandingRoute} from '../util/route_util';
import SplashContainer from "./splash/splash";
import Browse from "./browse/browse";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path="/browse" component={Browse}/>
            <LandingRoute path="/" component={SplashContainer}/>
            {/* <Route path="/this-is-emilysflix" component={Splash}/> */}
        </Switch>
        <footer>

        </footer>
    </div>
);

export default App;