import { SEARCH } from "../actions/ui_actions";



export default (state = {filteredContent: []}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case SEARCH:
            return action.filteredContent;
        default:
            return prevState;
    }
}