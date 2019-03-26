import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as SessionAPIUtil from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root');

    //TESTS
    window.getState = store.getState
    window.dispatch = store.dispatch
    // window.login = SessionAPIUtil.login
    // window.signup = SessionAPIUtil.signup
    // window.logout = SessionAPIUtil.logout
    //TESTS

    ReactDOM.render(<Root store={store} />, root)
})

//user: email = greg@gmail.com, password = starwars