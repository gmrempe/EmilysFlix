import { connect } from "react-redux";
import genreIndex from "./genre_index";
import { selectAllVideos } from "../../../reducers/selectors";
import { fetchGenre } from "../../../actions/genre_actions";
import { fetchAllVideos } from "../../../actions/video_actions";

export const msp = (state) => {
    return ({
        videos: selectAllVideos(state),
        genre: state.entities.genre
    })
}

export const mdp = dispatch => ({
    fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(msp, mdp)(genreIndex);