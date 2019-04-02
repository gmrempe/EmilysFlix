import React from 'react';
import VideoListIndexItemsContainer from "./video_list_index_items_container";

class VideoListIndex extends React.Component {

    constructor(props) {
        super(props)
        this.handleHeroClick = this.handleHeroClick.bind(this)
    }

    handleHeroClick() {
        const hero = document.getElementsByClassName("hero")
        const video = $(hero).find('video')
        if (video.prop('muted')) {
            video.prop('muted', false)
        } else {
            video.prop('muted', true)
        }
    }

    render() {
    
    return (
        <div className="browse-main">
            <div className='hero'>
                <video  autoPlay mute="true" loop onClick={this.handleHeroClick}
                    className="hero-video"> {/*Banner video from Pexels*/}
                    <source src={window.hero} type="video/mp4"/>
                </video>
            </div>
            <div className="after-hero">
                <ul>
                    <VideoListIndexItemsContainer/>
                    <VideoListIndexItemsContainer/>
                    <VideoListIndexItemsContainer/>
                    <VideoListIndexItemsContainer/>
                </ul>
            </div>
        </div>
    )
    }
}

export default VideoListIndex;