import { connect } from "react-redux";
import GenreIndex from "./genre_index";


export const msp = (state, ownProps) => {
    return ({
        videos: state.entities.videos,
        genre: state.entities.genres.filter(genre => (genre.id == ownProps.match.params.genre_id))
    })
}

export default connect(msp, null)(GenreIndex);