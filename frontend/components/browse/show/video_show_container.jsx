import { connect } from "react-redux";
import VideoShow from "./video_show";
import {fetchUser} from "../../../actions/session_actions";

const msp = (state, ownProps) => {
    return {
        video: ownProps.video,
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video),
    createList: videoId => (createList(videoId)),
    deleteList: videoId => (deleteList(videoId)),
    fetchUser: () => dispatch(fetchUser()),
})

export default connect(msp, mdp)(VideoShow);