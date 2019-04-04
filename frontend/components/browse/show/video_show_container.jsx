import { connect } from "react-redux";
import VideoShow from "./video_show";
import * as VideoMyListAPIUtil from "../../../util/videoMyList_api_util";

const msp = (state, ownProps) => {
    return {
        video: ownProps.video,
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video),
    createVideoMyList: videoId => VideoMyListAPIUtil.createVideoMyList(videoId),
    deleteVideoMyList: listId => VideoMyListAPIUtil.deleteVideoMyList(listId)
})

export default connect(msp, mdp)(VideoShow);