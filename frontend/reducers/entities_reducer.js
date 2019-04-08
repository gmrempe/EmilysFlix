import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import videoReducer from "./video_reducer";
import genresReducer from "./genres_reducer";
import genreReducer from "./genre_reducer";

export default combineReducers({
    users: usersReducer,
    videos: videosReducer,
    video: videoReducer,
    genres: genresReducer,
    genre: genreReducer
})