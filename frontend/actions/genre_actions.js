import * as GenreAPIUtil from "../util/genre_api_util";

export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveAllGenres = (genres) => ({
    type: RECEIVE_ALL_GENRES,
    genres
})

export const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre
})


//asynch
export const fetchAllGenres = () => dispatch => (
    GenreAPIUtil.fetchAllGenres().then(
        genres => dispatch(receiveAllGenres(genres))
    )
)

export const fetchGenre = (genreId) => dispatch => (
    GenreAPIUtil.fetchGenre(genreId).then(
        genre => dispatch(receiveGenre(genre))
    )
)

