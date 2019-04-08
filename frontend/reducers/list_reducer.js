// import { REMOVE_MY_LIST_VIDEO_ID, ADD_MY_LIST_VIDEO_ID, FETCH_LIST} from "../actions/list_actions";


// export default (state = {}, action) => {
//     const prevState = Object.assign({}, state);

//     Object.freeze(state);
//     switch (action.type) {
//         case FETCH_LIST:
//             debugger

//         return Object.assign({}, action.ListIds)
//     case ADD_MY_LIST_VIDEO_ID:
//         return Object.assign({}, prevState.myListVideoIds.concat(action.videoId))
//     case REMOVE_MY_LIST_VIDEO_ID:
//         debugger
//         prevState.myListVideoIds.filter( id => { id !== action.videoId })
//         return Object.assign({}, prevState);
//         default:
//             return prevState;
//     }
// }