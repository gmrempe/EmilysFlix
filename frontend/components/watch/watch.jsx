import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
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
        return (
            <div className="movie">
                <div className="back-to-browse-wrapper">
                    <i className="fas fa-arrow-left fa-2x"></i>
                    <Link className="back-to-browse" to="/browse">Back to Browse</Link>
                </div>
                <video controls autoplay>
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