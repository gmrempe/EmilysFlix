import { connect } from 'react-redux';
import Watch from './watch';
import {fetchVideo} from '../../actions/video_actions';


const msp = (state, ownProps) => {
    const videos = state.entities.videos;
    for(let i=0; i < videos.length; i++) {
        if(videos[i].id == ownProps.match.params.video_id) {
            return {video: videos[i]};
        }
    }
}

// const mdp = dispatch => ({
//     fetchVideo: videoId => dispatch(fetchVideo(videoId))
// })

export default connect(msp, null)(Watch);