export const fetchAllVideos = () => (
    $.ajax({
        method: "GET",
        url: "api/videos",
        data: {videos}
    })
)

export const fetchVideo = (videoId) => (
    $.ajax({
        method: "GET",
        url: "api/videos/id",
        data: {videoId}
    })
)
