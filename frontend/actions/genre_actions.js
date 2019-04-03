import * as GenreAPIUtil from "../util/genre_api_util";

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";

export const receiveAllGenres = (genres) => ({
    type: RECEIVE_ALL_GENRES,
    genres
})


//asynch
export const fetchAllGenres = () => dispatch => (
    GenreAPIUtil.fetchAllGenres().then(
        genres => dispatch(receiveAllGenres(genres))
    )
)

