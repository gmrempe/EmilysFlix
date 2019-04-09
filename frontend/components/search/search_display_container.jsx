import { connect } from "react-redux";
import Base from "../base_presentational/base";
import {fetchAllVideos} from "../../actions/video_actions";

const msp = state => {

    return ({
        videos: state.entities.videos || [],
        contentIds: state.ui.filteredContent || [],
        title: "Search Results",
        keyAddOn: "searchList"
    })
}

export const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(fetchAllVideos())
})

export default connect(msp, mdp)(Base);