import { connect } from "react-redux";
import VideoListIndexItems from "./video_list_index_items";
import { selectAllVideos } from "../../reducers/selectors";

const msp = (state, ownProps) => {
    return {
    videos: selectAllVideos(state) || [],
    listKey: ownProps.index,
    title: ownProps.title
    }
}

export default connect(msp, null)(VideoListIndexItems);



