import { connect } from "react-redux";
import MyListIndex from "./mylist_index.jsx";
import {fetchAllVideos} from "../../../actions/video_actions";

const msp = state => {
    return ({
        videos: state.entities.videos || [],
        myListVideoIds: state.entities.users[state.session.id].myListVideoIds || [],
    })
}

const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(msp, mdp)(MyListIndex);