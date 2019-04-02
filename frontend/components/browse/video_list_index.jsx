import React from 'react';
import VideoListIndexItemsContainer from "./video_list_index_items_container";

const VideoListIndex = () => (

    <div className="browse-main">
        <div className='hero'>
            {/* <video autoPlay mute={true}
                className="hero-video"> {/*Banner video from Pexels
                <source src={window.hero} type="video/mp4"/>
            </video> */}
        </div>
        <div className="after-hero">
            <ul>
                <VideoListIndexItemsContainer/>
                <VideoListIndexItemsContainer/>
            </ul>
        </div>
    </div>
)

export default VideoListIndex;