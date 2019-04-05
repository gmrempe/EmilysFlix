export const createList = videoId => (
    $.ajax({
        method: "POST",
        url: "/api/lists",
        data: { videoId }
    })
)

export const deleteList = videoId => (
    $.ajax({
        method: "DELETE",
        url: `/api/lists/${videoId}`
    })
)