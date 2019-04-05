import { connect } from "react-redux";
import genreIndex from "./genre_index";
import { selectAllGenres, selectAllVideos} from "../../../reducers/selectors";
// import { fetchAllGenres } from "../../../actions/genre_actions";
// import { fetchAllVideos } from "../../../actions/video_actions";

export const msp = (state, ownProps) => {
    return ({
        videos: selectAllVideos(state),
        genre: state.entities.genres.filter(genre => (genre.id == ownProps.match.params.genre_id))
    })
}

// export const mdp = dispatch => ({
//     // fetchAllGenres: () => dispatch(fetchAllGenres),  //make a fetchGenre action!
//     // fetchAllVideos: () => dispatch(fetchAllVideos)
// })

export default connect(msp, null)(genreIndex);