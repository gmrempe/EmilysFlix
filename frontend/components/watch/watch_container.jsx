import { connect } from 'react-redux';
import Watch from './watch';
import {fetchVideo} from "../../actions/video_actions";

const msp = (state, ownProps) => ({
    video: state.entities.video[ownProps.match.params.video_id]
})

const mdp = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
})

export default connect(msp, mdp)(Watch);