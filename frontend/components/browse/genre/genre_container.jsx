import { connect } from "react-redux";
import Base from "../../base_presentational/base";
import { selectAllVideos } from "../../../reducers/selectors";
import { fetchAllVideos } from "../../../actions/video_actions";

export const msp = (state, ownProps) => {
    const genres = Object.values(state.entities.genres);
    const genre = (genres.length > 0) ? (genres.filter(genre => genre.id == ownProps.match.params.genre_id)) : [{name: "Genre"}];
    const videos = Object.values(state.entities.videos).filter(video => video.genreIds.includes(genre[0].id));
    const contentIds = videos.map(video => video.id);
    
    return ({
        videos: selectAllVideos(state),
        contentIds: contentIds,
        title: `${genre[0].name}`,
        keyAddOn: "genreList"
    })
}

export const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
})

export default connect(msp, mdp)(Base);