import { connect } from "react-redux";
import VideoShow from "./video_show";
// import { removeMyListVideoId, addMyListVideoId } from "../../../actions/List_actions";
import {fetchUser} from "../../../actions/session_actions";
import {deleteList, createList} from "../../../util/List_api_util";

const msp = (state, ownProps) => {
    // debugger
    return {
        video: ownProps.video,
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video),
    createList: videoId => (createList(videoId)),
    deleteList: videoId => (deleteList(videoId)),
    fetchUser: () => dispatch(fetchUser())
})

export default connect(msp, mdp)(VideoShow);