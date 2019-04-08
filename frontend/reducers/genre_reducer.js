import { RECEIVE_GENRE } from "../actions/genre_actions";

export default (state = {}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GENRE:
            return action.genre;
        default:
            return prevState;
    }
}