import { connect } from "react-redux";
import VideoShow from "./video_show";

const msp = (state, ownProps) => {
    return {
        video: ownProps.video
    }
}

const mdp = (dispatch, ownProps) => ({
    toggleVideoShowClick: video => ownProps.toggleVideoShowClick(video)
})

export default connect(msp, mdp)(VideoShow);