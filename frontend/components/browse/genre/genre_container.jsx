import { connect } from "react-redux";
import genreIndex from "./genre_index";
import { selectAllVideos } from "../../../reducers/selectors";
import { fetchAllVideos } from "../../../actions/video_actions";

export const msp = (state, ownProps) => {
    const genres = Object.values(state.entities.genres);
    const genre = genres.filter(genre => genre.id == ownProps.match.params.genre_id);
    
    return ({
        videos: selectAllVideos(state),
        genre: genre
    })
}

export const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(msp, mdp)(genreIndex);