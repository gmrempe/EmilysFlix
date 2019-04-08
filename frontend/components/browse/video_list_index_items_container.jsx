import { connect } from "react-redux";
import VideoListIndexItems from "./video_list_index_items";
import { fetchAllVideos } from "../../actions/video_actions";
import { selectAllVideos } from "../../reducers/selectors";

const msp = (state, ownProps) => {
    return {
    videos: selectAllVideos(state) || [],
    listKey: ownProps.index
    }
}

const mdp = (dispatch) => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
})

export default connect(msp, mdp)(VideoListIndexItems);



