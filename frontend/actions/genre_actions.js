import * as GenreAPIUtil from "../util/genre_util";

const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES";
const RECEIVE_VIDEO_GENRES = "RECEIVE_VIDEO_GENRES";

export const receiveAllGenres = (genres) => ({
    type: RECEIVE_ALL_GENRES,
    genres
})

export const receiveVideoGenres = (videoGenres) => ({
    type: RECEIVE_VIDEO_GENRES,
    videoGenres
})

//asynch
export const fetchAllGenres = () => dispatch => (
    GenreAPIUtil.fetchAllGenres().then(
        genres => dispatch(receiveAllGenres(genres))
    )
)

export const fetchVideoGenres = (videoId) => dispatch => (
    GenreAPIUtil.fetchVideoGenres(videoId).then(
        videoGenres => dispatch(receiveCurrentUser(videoGenres))
    )
);
