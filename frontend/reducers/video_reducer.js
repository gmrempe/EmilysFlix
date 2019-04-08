import { RECEIVE_VIDEO } from "../actions/video_actions";



export default (state = {}, action) => {
    const oldState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return { [action.video.id]: action.video }
        default:
            return oldState;
    }
}