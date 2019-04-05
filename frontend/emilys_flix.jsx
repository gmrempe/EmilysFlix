import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as SessionAPIUtil from "./util/session_api_util";
// import * as GenreAPIUtil from "./util/genre_api_util";
// import {fetchAllGenres} from "./actions/genre_actions";
import * as ListAPIUtil from "./util/List_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    //bootstrap currentUser to remain logged in
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TESTS
    window.getState = store.getState
    window.createList = ListAPIUtil.createList
    window.deleteList = ListAPIUtil.deleteList
    // window.fetchAllGenres = GenreAPIUtil.fetchAllGenres
    // window.dispatch = store.dispatch
    // window.login = SessionAPIUtil.login
    // window.signup = SessionAPIUtil.signup
    // window.logout = SessionAPIUtil.logout
    //TESTS

    ReactDOM.render(<Root store={store} />, root)
})