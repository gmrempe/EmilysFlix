// import * as ListAPIUtil from "../util/List_api_util";


// export const RECEIVE_LIST = 'RECEIVE_MY_LIST';
// export const REMOVE_LIST = 'REMOVE_LIST';

// export const receiveList = (List) => ({
//     type: RECEIVE_LIST,
//     List
// });

// export const removeList = (listId) => ({
//     type: REMOVE_LIST,
//     listId
// });

// //asynch thunk actions
// export const createList = (videoId) => dispatch => (
//     ListAPIUtil.createList(videoId).then(
//         List => dispatch(receiveList(List))
// ));

// export const deleteList = (videoId) => dispatch => (
//     VideoAPIUtil.deleteList(videoId).then(
//         List => dispatch(removeList(listId))
// ));