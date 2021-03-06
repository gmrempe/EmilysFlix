import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {id: null}

export default (state = _nullUser, action) => {
    const prevState = Object.assign({}, state);
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id}
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return prevState;
    }
}