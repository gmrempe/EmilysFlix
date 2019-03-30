import React from 'react';
import VideoIndexItem from './video_index_item';


class VideoListIndexItems extends React.Component {


    // componentDidMount() {
    //     this.props.fetchAllVideos();
    // }

    render() {
        const videos = this.props.videos.map(video => <VideoIndexItem key={video.id} video={video} />)
        // debugger
        return(
            <section className="video-list-wrapper">
                <h2>List Title</h2>
                <div className="video-list">
                    <button className="slider-left">slide left</button>
                    <ul>
                        {/* <li>im a video</li> */}
                        {videos}
                    </ul>
                    <button className="slider-right">slide right</button>
                </div>
            </section>
        );
    }
}

export default VideoListIndexItems;