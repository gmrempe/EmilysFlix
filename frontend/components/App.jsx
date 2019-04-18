import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute, LandingRoute} from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import VideoListIndexContainer from "./browse/video-list-index-container";
import WatchContainer from "./watch/watch_container";
import MyListContainer from "./browse/mylist/mylist_container.jsx";
import GenreContainer from "./browse/genre/genre_container";
import SearchDisplayContainer from "./search/search_display_container";
import Header from "./browse/header_footer/browse_container";
import Footer from './browse/header_footer/footer';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        
        if(this.props.activeSearch) {
            return (
                <div>
                    <Route path="/browse" component={Header}/>
                    <div className='content-main'>
                        <SearchDisplayContainer/>
                    </div>
                    <Route path="/browse" component={Footer} />
                </div>
            )
        } else {
            return (
            <div>
                <Route path="/browse" component={Header}/>
                <div className='content-main'>
                    <Switch>
                        <AuthRoute exact path="/login" component={LoginFormContainer}/>
                        <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                        <ProtectedRoute exact path="/browse/my-list" component={MyListContainer}/>
                        <ProtectedRoute exact path="/browse/genre/:genre_id" component={GenreContainer}/>
                        <ProtectedRoute exact path="/browse" component={VideoListIndexContainer}/>
                        <ProtectedRoute exact path="/watch/:video_id" component={WatchContainer}/>
                        <Route path="/" component={SplashContainer}/>
                    </Switch>
                </div>
                <Route path="/browse" component={Footer} />
            </div>
            )
        }
    }
}

export default App;