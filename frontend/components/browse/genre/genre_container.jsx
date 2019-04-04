import { connect } from "react-redux";
import GenreIndex from "./genre_index";


export const msp = state => {
    return ({
        videos: state.entities.videos,
        genres: state.entites.genres
    })
}

export const mdp = dispatch => {
    return ({

    })
}


export default connect(msp, mdp)(GenreIndex);