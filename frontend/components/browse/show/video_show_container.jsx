import { connect } from "react-redux";
import VideoShow from "./video_show";
import {fetchUser} from "../../../actions/session_actions";
import {createList, deleteList} from "../../../util/List_api_util";
import {deleteLike, createLike} from "../../../util/like_api_util";
import { clearSearch } from "../../../actions/ui_actions";


const msp = (state, ownProps) => {
    return {
        video: ownProps.video,
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds,
        likeVideoIds: (state.entities.users[state.session.id].likeVideoIds).map(obj => obj.video_id) || [],
        dislikeVideoIds: (state.entities.users[state.session.id].dislikeVideoIds).map(obj => obj.video_id) || []
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video),
    createList: videoId => (createList(videoId)),
    deleteList: videoId => (deleteList(videoId)),
    deleteLike: videoId => (deleteLike(videoId)),
    createLike: (videoId, response) => (createLike(videoId, response)),
    fetchUser: () => dispatch(fetchUser()),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(msp, mdp)(VideoShow);