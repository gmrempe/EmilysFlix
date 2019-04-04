import { connect } from "react-redux";
import GenreIndex from "./genre_index";
import {selectAllGenres, selectAllVideos} from "../../../reducers/selectors";

export const msp = (state, ownProps) => {
    return ({
        videos: selectAllVideos(state),
        genre: selectAllGenres(state).filter(genre => (genre.id == ownProps.match.params.genre_id))
    })
}

export default connect(msp, null)(GenreIndex);