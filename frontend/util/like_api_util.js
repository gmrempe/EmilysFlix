export const createLike = (videoId, response) => (
    $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { videoId, response }
    })
)

export const deleteLike = (videoId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/likes/${videoId}`
    })
)
