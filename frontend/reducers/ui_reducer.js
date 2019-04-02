import { combineReducers } from "redux";
import uiVideoReducer from "./ui_video_reducer";


export default combineReducers({
    videoId: uiVideoReducer
})