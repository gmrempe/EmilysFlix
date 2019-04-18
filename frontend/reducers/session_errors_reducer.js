import { RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";


export default (state = [], action) => {
    const prevState = Object.assign([], state);

    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
        return action.errors;
    case CLEAR_ERRORS:
        return [];
    default:
        return prevState;
    }
}