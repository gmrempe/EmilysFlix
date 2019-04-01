import React from 'react';
import VideoListIndexItemsContainer from "./video_list_index_items_container";

const VideoListIndex = () => (

    <div>
        <div className='hero'>
            <video autoPlay
                className="hero-video"> {/*Banner video from Pexels */}
                <source src={window.hero} type="video/mp4"/>
            </video>
        </div>
        <ul>
            <VideoListIndexItemsContainer/>
            <VideoListIndexItemsContainer/>
            <VideoListIndexItemsContainer/>
        </ul>
    </div>
)

export default VideoListIndex;