import React from 'react';
import {Link, withRouter} from "react-router-dom";
// import VideoShowContainer from './show/video_show_container';

class VideoIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.handlePlayClick = this.handlePlayClick.bind(this)
        // this.handleHover = this.handleHover.bind(this)
        // this.handleSoundClick = this.handleSoundClick.bind(this)
    }

    handlePlayClick() {
        this.props.history.push(`/watch/${this.props.video.id}`);
    }

    handleSoundClick() {
        const video = document.getElementById(this.props.video.id)
        const muteButton = addEventListener("click", () => {
            if (video.muted === false) {
                video.muted = true
                muteButton.classList = "fas fa-volume-mute"
            } else {
                video.muted = false
                muteButton.classList = "fas fa-volume-up"
            }
        })
    }

    handleVideoShow() {
    }

    render() {
        const video = this.props.video
        const onVideoShowClick = this.props.onVideoShowClick
        // debugger
        
        return (
            <li className="video-index-item">
                <div className="video-index-button-wrapper">
                    <div className="video-index-buttons">
                        <div className="video-index-left">
                            <i className="far fa-play-circle"></i>
                            <div className="title">{video.title}</div>
                            <div className="rating">{video.rating}</div>
                            <div>Genre</div>
                        </div>
                        <div className="video-index-right">
                            <i className="fas fa-volume-mute"></i>
                            <button className="like-index-item">like</button>
                            <button className="dislike-index-item">dislike</button>
                            <button className="myList-videoShow">mylist</button>
                        </div>
                    </div>
                    <button className="video-index-bottom" onClick={onVideoShowClick(video)}>
                        <i className="fas fa-chevron-down fs-lg"></i>
                    </button>
                </div>
                <div className="video-index-wrapper" onClick={this.handlePlayClick}>
                    <video width="100%" height="auto" poster={video.imageUrl}>
                        <source src={video.videoUrl} type="video/mp4"/>
                    </video>
                </div>
            </li>
        )
    }
}

export default withRouter(VideoIndexItem);