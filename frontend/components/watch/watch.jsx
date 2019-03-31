import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Watch extends React.Component {

    componentDidMount() {
        
        this.props.fetchVideo(this.props.match.params.video_id)
    }

    handleClick() {
        const video = document.getElementById("video-watch")
        const pause = document.getElementById("pause")
        
        if(video.paused) {
            video.play();

        } else {
            video.pause();
        }
    }

    render() {
        return (
            <div id="movie">
                <Link to="/browse">Back to Browse</Link>
                <video id="video-watch" controls autoPlay>
                    <source src={this.props.video.videoUrl} type="video/mp4"/>
                </video>
                <div>
                    <h3>{this.props.video.title}</h3>
                    <button id="pause" onClick={this.handleClick}>play</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Watch);