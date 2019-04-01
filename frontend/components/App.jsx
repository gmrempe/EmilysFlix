import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Link, Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute, LandingRoute} from '../util/route_util';
import SplashContainer from "./splash/splash_container";
// import VideoListIndexContainer from "./browse/video_list_index_items_container";
import VideoListIndex from "./browse/video_list_index";
import WatchContainer from "./watch/watch_container";
import Header from "./browse/header_footer/browse_container";
import Footer from './browse/header_footer/footer';

const header = window.currentUser ? <Header/> : null

const App = () => (
    <div>
        <Route exact path="/browse" component={Header}/>
        <div className='content-main'>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/browse" component={VideoListIndex}/>
                {/* <ProtectedRoute exact path="/browse" component={BrowseContainer}/> */}
                <ProtectedRoute exact path="/watch/:video_id" component={WatchContainer}/>
                <LandingRoute path="/" component={SplashContainer}/>
                {/* <Route path="/this-is-emilysflix" component={Splash}/> */}
            </Switch>
        </div>
        <Route exact path="/browse" component={Footer} />
    </div>
);

export default App;