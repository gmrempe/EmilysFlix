import { connect } from "react-redux";
import VideoListIndexItems from "./video_list_index_items";
import { fetchAllVideos } from "../../actions/video_actions";
import { selectAllVideos, selectAllGenres} from "../../reducers/selectors";
import {fetchAllGenres} from "../../actions/genre_actions";

const msp = (state, ownProps) => {
    // debugger
    return {
    videos: selectAllVideos(state) || [],
    listKey: ownProps.index,
    genres: selectAllGenres(state) || []
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
    // onVideoShowClick: ownProps.onVideoShowClick,
    fetchAllGenres: genres => dispatch(fetchAllGenres(genres))
})

export default connect(msp, mdp)(VideoListIndexItems);



