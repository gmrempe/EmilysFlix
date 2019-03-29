import { connect } from "react-redux";
import VideoListIndexItems from "./video_list_index_items";
import receiveAllVideos from "../../actions/video_actions";
import selectAllVideos from "../../reducers/selectors";


const msp = state => ({
    videos: selectAllVideos(state)
    // images: state.images
})

const mdp = dispatch => ({
    receiveAllVideos: videos => dispatch(receiveAllVideos(videos))
})

export default connect(msp, mdp)(VideoListIndexItems);