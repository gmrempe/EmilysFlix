import { HIDE_VIDEO_SHOW, SHOW_VIDEO_SHOW } from "../actions/ui_actions";

const _nullVideo = { videoId: {videoId: "false" }}


export default (state = _nullVideo, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case HIDE_VIDEO_SHOW:
            return {[action.videoId]: {[action.videoId]: "false"}}
        case SHOW_VIDEO_SHOW:
            return {[action.videoId]: {[action.videoId]: "true"}}
        default:
            return prevState;
    }
}