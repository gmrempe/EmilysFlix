import { RECEIVE_VIDEO_GENRES } from "../actions/genre_actions";

export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_GENRES:
            return action.videoGenres;
        default:
            return prevState;
    }
}
        