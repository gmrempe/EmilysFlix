import React from 'react';
import VideoIndexItem from './video_index_item';


class VideoListIndexItems extends React.Component {


    componentDidMount() {
        this.props.fetchAllVideos();
    }

    render() {
        const {videos } = this.props;

        return(
            <section>List Title
                <button className="slider-left">slide left</button>
                <ul>
                    {videos.map(video => <VideoIndexItem key={video.id} video={video}/>)}
                </ul>
                <button className="slider-right">slide right</button>
            </section>
        );
    }
}

export default VideoListIndexItems;