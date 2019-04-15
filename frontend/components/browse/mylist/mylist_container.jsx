import { connect } from "react-redux";
import {selectAllVideos} from "../../../reducers/selectors";
import {fetchAllVideos} from "../../../actions/video_actions";
import Base from "../../base_presentational/base";

const msp = state => {

    return ({
        videos: selectAllVideos(state) || [],
        contentIds: state.entities.users[state.session.id].myListVideoIds || [],
        title: "My List",
        keyAddOn: "myList"
    })
}

const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(msp, mdp)(Base);