// import { REMOVE_MY_LIST_VIDEO_ID, ADD_MY_LIST_VIDEO_ID } from "../actions/list_actions";

// export default (state = {}, action) => {
//     const prevState = Object.assign({}, state);

//     Object.freeze(state);
//     switch (action.type) {
//     case ADD_MY_LIST_VIDEO_ID:
//         return Object.assign({}, prevState, action.videoId)
//     case REMOVE_MY_LIST_VIDEO_ID:
//         debugger
//         delete prevState[action.videoId]
//         return Object.assign({}, prevState);
//         default:
//             return prevState;
//     }
// }