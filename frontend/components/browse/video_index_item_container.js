import { connect } from "react-redux";
import VideoIndexItem from "./video_index_item";
import { fetchAllGenres } from "../../actions/genre_actions";
import { selectAllGenres } from "../../reducers/selectors";


const msp = (state, ownProps) => {
    return ({
        video: ownProps.video,
        genres: selectAllGenres(state) || []
    })
}

const mdp = dispatch => ({
    fetchAllGenres: genres => dispatch(fetchAllGenres(genres))
})

export default connect(msp, mdp)(VideoIndexItem);