import { SEARCH, CLEAR_SEARCH } from "../actions/ui_actions";



export default (state = {filteredContent: [], activeSearch: false}, action) => {
    const prevState = Object.assign({}, state);

    Object.freeze(state);
    switch (action.type) {
        case SEARCH:
            return {filteredContent: action.filteredContent, activeSearch: true};
        case CLEAR_SEARCH:
            return {filteredContent: [], activeSearch: false};
        default:
            return prevState;
    }
}