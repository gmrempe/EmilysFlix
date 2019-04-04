// import * as VideoMyListAPIUtil from "../util/videoMyList_api_util";


// export const RECEIVE_VIDEO_MY_LIST = 'RECEIVE_VIDEO_MY_LIST';
// export const REMOVE_VIDEO_MY_LIST = 'REMOVE_VIDEO_MY_LIST';

// export const receiveVideoMyList = (videoMyList) => ({
//     type: RECEIVE_VIDEO_MY_LIST,
//     videoMyList
// });

// export const removeVideoMyList = (listId) => ({
//     type: REMOVE_VIDEO_MY_LIST,
//     listId
// });

// //asynch thunk actions
// export const createVideoMyList = (videoMyList) => dispatch => (
//     VideoMyListAPIUtil.createVideoMyList(videoMyList).then(
//         VideoMyList => dispatch(receiveVideoMyList(VideoMyList))
// ));

// export const deleteVideoMyList = (listId) => dispatch => (
//     VideoAPIUtil.deleteVideoMyList(listId).then(
//         VideoMyList => dispatch(removeVideoMyList(listId))
// ));