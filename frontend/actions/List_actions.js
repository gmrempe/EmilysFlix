// import * as ListAPIUtil from "../util/List_api_util";

// export const REMOVE_MY_LIST_VIDEO_ID = 'REMOVE_MY_LIST_VIDEO_ID';
// export const ADD_MY_LIST_VIDEO_ID = 'ADD_MY_LIST_VIDEO_ID';
// export const FETCH_LIST = "FETCH_LIST";

// export const fetchList = user => {
//     debugger
//     return ({
//         type: FETCH_LIST,
//         listIds: user.MyListVideoIds
//     })
// }

// export const removeMyListVideoId = videoId => ({
//     type: REMOVE_MY_LIST_VIDEO_ID,
//     videoId
// })

// export const addMyListVideoId = videoId => ({
//     type: ADD_MY_LIST_VIDEO_ID,
//     videoId
// })


// //asynch
// export const createList = (videoId) => dispatch => (
//     ListAPIUtil.createList(videoId).then(
//         videoId => dispatch(receiveList(videoId))
// ));

// export const deleteList = (videoId) => dispatch => (
//     VideoAPIUtil.deleteList(videoId).then(
//         videoId => dispatch(removeList(videoId))
// ));


// export const fetchUser = () => dispatch => (
//     SessionAPIUtil.fetchUser().then(user => dispatch(fetchList(user)))
// )