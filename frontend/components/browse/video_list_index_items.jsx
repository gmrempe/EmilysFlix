import React from 'react';
import VideoIndexItem from './video_index_item';


class VideoListIndexItems extends React.Component {


    componentDidMount() {
        this.props.fetchAllVideos();
    }

    handleLeftSlide() {

    }

    handleRightSlide() {

    }


    render() {
        const videos = this.props.videos.map(video => <VideoIndexItem key={video.id} video={video} />)

        return(
            <section className="video-list-wrapper">
                <h2>List Title</h2>
                <div className="video-list">
                    <i className="fas fa-chevron-left slider-left" onClick={this.handleLeftSlide}></i>
                    <ul>
                        {videos}
                    </ul>
                    <i className="fas fa-chevron-right slider-right" onClick={this.handleRightSlide}></i>
                </div>
            </section>
        );
    }
}

export default VideoListIndexItems;