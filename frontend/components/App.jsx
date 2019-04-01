import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Link, Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute, LandingRoute} from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import VideoListIndexContainer from "./browse/video_list_index_items_container";
import WatchContainer from "./watch/watch_container";
import Header from "./browse/browse_container";
import Footer from './browse/footer';
// import VideoContainer from "./watch/video_container";
// import BrowseContainer from "./browse/browse_container";

const header = window.currentUser ? <Header/> : null

const App = () => (
    <div>
        <Header />
        <div className='content-main'>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/browse" component={VideoListIndexContainer}/>
                {/* <ProtectedRoute exact path="/browse" component={BrowseContainer}/> */}
                <ProtectedRoute exact path="/watch/:video_id" component={WatchContainer}/>
                {/* <ProtectedRoute exact path="/watch/:video-id" component={VideoContainer}/> */}
                <LandingRoute path="/" component={SplashContainer}/>
                {/* <Route path="/this-is-emilysflix" component={Splash}/> */}
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;