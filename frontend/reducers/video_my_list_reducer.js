import { RECEIVE_VIDEO_MY_LIST, REMOVE_VIDEO_MY_LIST } from "../actions/videoMyList_actions";


export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_MY_LIST:
            return Object.assign({}, prevState, action.videoMyList)
        case REMOVE_VIDEO_MY_LIST:
            delete prevState[action.listId]
            return prevState
        default:
            return prevState;
    }
}