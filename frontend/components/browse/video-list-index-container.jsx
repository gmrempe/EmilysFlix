import { connect } from "react-redux";
import VideoListIndex from "./video_list_index";
import { fetchAllVideos } from "../../actions/video_actions";
import { selectAllVideos } from "../../reducers/selectors";

const msp = state => {
    debugger
    return {
        videos: selectAllVideos(state) || [],
        filteredContent: state.ui.filteredContent || []
    }
}

const mdp = dispatch => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
})

export default connect(msp, mdp)(VideoListIndex);