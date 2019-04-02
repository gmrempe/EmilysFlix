export const HIDE_VIDEO_SHOW = "HIDE_VIDEO_SHOW";
export const SHOW_VIDEO_SHOW = "SHOW_VIDEO_SHOW";


export const hideVideoShow = (videoId) => ({
    type: HIDE_VIDEO_SHOW,
    videoId
});

export const showVideoShow = (videoId) => ({
    type: SHOW_VIDEO_SHOW,
    videoId
});