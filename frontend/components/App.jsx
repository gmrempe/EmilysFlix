import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import {Route, Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute, LandingRoute} from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import VideoListIndex from "./browse/video_list_index";
import WatchContainer from "./watch/watch_container";
import MyListContainer from "./browse/mylist/mylist_container";
import Header from "./browse/header_footer/browse_container";
import Footer from './browse/header_footer/footer';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.currentTarget.scrollY
        const header = document.getElementsByClassName("main-header")
        if (header) {
        if ( scrollTop > 0) {
            header[0].classList.add("black")
        } else {
            header[0].classList.remove("black")
        }}
    }

    render () {
        
    return (
    <div>
        <Route exact path="/browse" component={Header} onscroll={this.handleScroll}/>
        <div className='content-main'>
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/browse/my-list" component={MyListContainer}/>
                <ProtectedRoute exact path="/browse" component={VideoListIndex}/>
                <ProtectedRoute exact path="/watch/:video_id" component={WatchContainer}/>
                <LandingRoute path="/" component={SplashContainer}/>
            </Switch>
        </div>
        <Route exact path="/browse" component={Footer} />
    </div>
    )
    }
}

export default App;