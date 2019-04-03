import React from 'react';
import {Link, withRouter} from "react-router-dom";

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

    // handleSoundClick() {
    //     const video = document.getElementById(this.props.video.id)
    //     const muteButton = addEventListener("click", () => {
    //         if (video.muted === false) {
    //             video.muted = true
    //             muteButton.classList = "fas fa-volume-mute"
    //         } else {
    //             video.muted = false
    //             muteButton.classList = "fas fa-volume-up"
    //         }
    //     })

    render() {
        const video = this.props.video
        const toggleVideoShowClick = this.props.toggleVideoShowClick
        // debugger
        return (
            <li className="video-index-item">
                <div className="video-index-button-wrapper">
                    <div className="video-index-buttons">
                        <div className="video-index-left">
                            <i className="far fa-play-circle fa-2x"></i>
                            <div className="title">{video.title}</div>
                            <div className="rating">{video.rating}</div>
                            <div>Genre</div>
                        </div>
                        <div className="video-index-right">
                            <i className="fas fa-volume-mute fa-lg"></i>
                            <button className="like-index-item">
                                <i className="far fa-thumbs-up fa-lg"></i>
                            </button>
                            <button className="dislike-index-item">
                                <i className="far fa-thumbs-up fa-lg"></i>                            
                            </button>
                            <button className="myList-videoShow">
                                <i className="fas fa-plus fa-lg"></i>
                            </button>
                        </div>
                    </div>
                    <button className="video-index-bottom" onClick={toggleVideoShowClick(video)}>
                        <i className="fas fa-chevron-down fa-3x"></i>
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