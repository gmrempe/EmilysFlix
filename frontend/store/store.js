import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const preloadedState = {store.getState().entities.users[0].myListVideoIds}
// todo persist mylist on hard refresh
const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
)

export default configureStore;