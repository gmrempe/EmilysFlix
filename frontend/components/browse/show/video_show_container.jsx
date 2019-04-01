import { connect } from "react-redux";
import VideoShow from "./video_show";



const msp = (state, ownProps) => ({
    video: ownProps.video
})

export default connect(msp, null)(VideoShow);