import { RECEIVE_CURRENT_USER, REMOVE_MY_LIST_VIDEO_ID, ADD_MY_LIST_VIDEO_ID } from "../actions/session_actions";



export default (state = {}, action) => {
    const prevState = Object.assign({}, state);
    
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return Object.assign({}, prevState, action.currentUser);
        case ADD_MY_LIST_VIDEO_ID:
        return prevState.myListVideoIds.concat(action.videoId)
    case REMOVE_MY_LIST_VIDEO_ID:
        prevState.myListVideoIds = prevState.myListVideoIds.filter(id => id !== action.videoId)
        return Object.assign({}, prevState);
    default:
        return prevState;
    }
}

// [action.currentUser.id]: 