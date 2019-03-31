import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchVideo(this.props.match.params.video_id)
    }

    handleClick() {
        // const video = document.getElementById("-")
        // const pause = document.getElementById("pause")
        
        if(video.paused) {
            video.play();

        } else {
            video.pause();
        }
    }

    render() {
        // debugger
        return (
            <div className="movie">
                <Link className="back-to-browse" to="/browse">Back to Browse</Link>
                <video controls>
                    <source src={this.props.video.videoUrl} type="video/mp4"/>
                </video>
                {/* <div>
                    <h3>{this.props.video.title}</h3>
                    <button className="pause" onClick={this.handleClick}>play</button>
                </div> */}
            </div>
        )
    }
}

export default withRouter(Watch);