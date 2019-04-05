// export const HIDE_VIDEO_SHOW = "HIDE_VIDEO_SHOW";
// export const SHOW_VIDEO_SHOW = "SHOW_VIDEO_SHOW";


// export const hideVideoShow = (videoId) => ({
//     type: HIDE_VIDEO_SHOW,
//     videoId
// });

// export const showVideoShow = (videoId) => ({
//     type: SHOW_VIDEO_SHOW,
//     videoId
// });

export const SEARCH = "SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const search = (filteredContent) => ({
    type: SEARCH,
    filteredContent
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
})