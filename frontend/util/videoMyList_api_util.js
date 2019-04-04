export const createVideoMyList = videoId => (
    $.ajax({
        method: "POST",
        url: "/api/video_my_lists",
        data: { videoId }
    })
)

export const deleteVideoMyList = videoId => (
    $.ajax({
        method: "DELETE",
        url: `/api/video_my_lists/${videoId}`
    })
)