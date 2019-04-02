import { connect } from 'react-redux';
import Watch from './watch';

const msp = (state, ownProps) => {
    const videos = state.entities.videos;
    for(let i=0; i < videos.length; i++) {
        if(videos[i].id == ownProps.match.params.video_id) {
            return {video: videos[i]};
        }
    }
}

export default connect(msp, null)(Watch);