import { connect } from 'react-redux';
import Watch from './watch';
import {fetchVideo, clearVideo} from "../../actions/video_actions";

const msp = state => {
    return ({
    video: Object.values(state.entities.video) || []
})}

const mdp = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    clearVideo: () => dispatch(clearVideo())
})

export default connect(msp, mdp)(Watch);