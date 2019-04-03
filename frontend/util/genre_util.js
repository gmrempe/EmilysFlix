export const fetchAllGenres = () => (
    $.ajax({
        method: "GET",
        url: "/api/genres"
    })
)

export const fetchAllVideoGenres = (videoId) => (
    $.ajax({
        method: "GET",
        url: `/api/video_genres/${videoId}`
    })
)