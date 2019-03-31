import React from 'react';
import {Link, withRouter} from "react-router-dom";
// {/* <img width="100%" height="auto" src={video.imageUrl}/> */}







class VideoIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.handlePlayClick = this.handlePlayClick.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleSoundClick = this.handleSoundClick.bind(this)
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

    handleHover() {
        const runVideo = document.getElementById(this.props.video.id)
        // runVideo.play();
    }

    render() {
        const video = this.props.video
        return (
            <li className="video-index-item" onMouseOver={this.handleHover}>
                <div className="video-index-button-wrapper">
                    <div className="video-index-buttons">
                        <div className="video-index-left">
                            <i className="far fa-play-circle" onClick={this.handlePlayClick}></i>
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
                    <div className="video-index-bottom">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="video-index-wrapper">
                    <video id={video.id} width="100%" height="auto" poster={video.imageUrl}>
                        <source src={video.videoUrl} type="video/mp4"/>
                    </video>
                </div>
            </li>
        )
    }
}

export default withRouter(VideoIndexItem);