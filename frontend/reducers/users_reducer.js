import { RECEIVE_CURRENT_USER } from "../actions/session_actions";



export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, prevState, {[action.currentUser.id]: action.currentUser});
    default:
        return prevState;
    }
}