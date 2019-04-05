export const fetchAllGenres = () => (
    $.ajax({
        method: "GET",
        url: "api/genres"
    })
)