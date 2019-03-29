import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Watch extends React.Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.video_id)
    }

    render() {
        
        return (
            <div>
                <Link to="/browse">Back to Browse</Link>
                <video width="" height="" controls autoPlay>
                    <source src={this.props.video.videoUrl} type="video/mp4"/>
                    Your browser does not support this video file.
                </video>
            </div>
        )
    }
}

export default withRouter(Watch);