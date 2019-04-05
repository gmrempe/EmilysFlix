import { connect } from "react-redux";
import VideoShow from "./video_show";
import * as ListAPIUtil from "../../../util/List_api_util";

const msp = (state, ownProps) => {
    return {
        video: ownProps.video,
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video),
    createList: videoId => ListAPIUtil.createList(videoId),
    deleteList: listId => ListAPIUtil.deleteList(listId)
})

export default connect(msp, mdp)(VideoShow);