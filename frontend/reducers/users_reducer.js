import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return {[action.user.id]: action.user};
    default:
        return prevState;
    }
}
