import { SEARCH, CLEAR_SEARCH } from "../actions/ui_actions";



export default (state = {filteredContent: [], contentFilter: "", activeSearch: false}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case SEARCH:
            return {filteredContent: action.filteredContent, contentFilter: action.contentFilter, activeSearch: true};
        case CLEAR_SEARCH:
            return {filteredContent: [], contentFilter: "", activeSearch: false};
        default:
            return prevState;
    }
}