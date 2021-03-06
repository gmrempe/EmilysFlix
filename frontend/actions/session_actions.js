import * as SessionAPIUtil from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    })};
    
    export const logoutCurrentUser = () => ({
        type: LOGOUT_CURRENT_USER,
    });
    
    export const receiveSessionErrors = (errors) => ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
    
    export const clearErrors = () => ({
        type: CLEAR_ERRORS
    })

//asynch thunk actions

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveSessionErrors(error.responseJSON)))
);

export const login = user => dispatch => {
    return (
    SessionAPIUtil.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveSessionErrors(error.responseJSON)))
)};

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const fetchUser = () => dispatch => (
    SessionAPIUtil.fetchUser().then(currentUser => dispatch(receiveCurrentUser(currentUser)))
)
