import { connect } from "react-redux";
import VideoIndexItem from "./video_index_item";
import { fetchAllGenres } from "../../actions/genre_actions";
import { selectAllGenres } from "../../reducers/selectors";
import { fetchUser } from "../../actions/session_actions";
import { createList, deleteList } from "../../util/List_api_util";
import { deleteLike, createLike } from "../../util/like_api_util";


const msp = (state, ownProps) => {
    return ({
        video: ownProps.video,
        genres: selectAllGenres(state) || [],
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds,
        likeVideoIds: (state.entities.users[state.session.id].likeVideoIds).map(obj => obj.video_id) || [],
        dislikeVideoIds: (state.entities.users[state.session.id].dislikeVideoIds).map(obj => obj.video_id) || []
    })
}

const mdp = dispatch => ({
    createList: videoId => (createList(videoId)),
    deleteList: videoId => (deleteList(videoId)),
    createLike: (videoId, response) => (createLike(videoId, response)),
    deleteLike: videoId => (deleteLike(videoId)),
    fetchUser: () => dispatch(fetchUser()),
    fetchAllGenres: genres => dispatch(fetchAllGenres(genres))
})

export default connect(msp, mdp)(VideoIndexItem);