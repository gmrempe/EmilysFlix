import { connect } from "react-redux";
import VideoListIndexItems from "./video_list_index_items";
import { fetchAllVideos } from "../../actions/video_actions";
import { selectAllVideos} from "../../reducers/selectors";

const msp = state => {
    return {
    videos: selectAllVideos(state) || []
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
    onVideoShowClick: ownProps.onVideoShowClick
})

export default connect(msp, mdp)(VideoListIndexItems);
