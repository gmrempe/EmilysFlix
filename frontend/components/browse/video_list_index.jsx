import React from 'react';
import VideoListIndexItems from "./video_list_index_items";

const VideoListIndex = () => (

    <div>
        <div className='hero'></div>
        <video autoplay="" loop="" muted="" 
        poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg" 
        class="vsc-initialized">
            <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4"/>
        </video>
        <ul>
            <VideoListIndexItems/>
        </ul>
    </div>
)

export default VideoListIndex;