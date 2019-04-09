import { RECEIVE_ALL_VIDEOS } from "../actions/video_actions";



export default (state = {}, action) => {
    const oldState = Object.assign({}, state);

    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        // case RECEIVE_VIDEO:
        //     return Object.assign({}, oldState, {[action.video.id]: action.video})
        default:
            return state;
    }
}