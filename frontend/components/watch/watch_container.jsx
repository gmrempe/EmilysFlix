import { connect } from 'react-redux';
import Watch from './watch';
import {fetchVideo} from "../../actions/video_actions";

const msp = (state, ownProps) => {
    return ({
    video: Object.values(state.entities.video) || []
})}

const mdp = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})

export default connect(msp, mdp)(Watch);