import { RECEIVE_ALL_GENRES} from "../actions/genre_actions";

export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_GENRES:
            return action.genres;
        default:
            return prevState;
    }
}