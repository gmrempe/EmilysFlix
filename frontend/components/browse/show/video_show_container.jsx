import { connect } from "react-redux";
import VideoShow from "./video_show";



const msp = (state, ownProps) => {
    // debugger
    return {
    video: ownProps.video || {},
}
}

const mdp = (dispatch, ownProps) => {
    // debugger
    return {
        
    }
}

export default connect(msp, mdp)(VideoShow);