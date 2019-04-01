import React from 'react';
import VideoIndexItem from './video_index_item';


class VideoListIndexItems extends React.Component {

    constructor(props) {
        super(props)
        this.handleLeftSlide = this.handleLeftSlide.bind(this)
        this.handleRightSlide = this.handleRightSlide.bind(this)
    }

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
                    <i className="fas fa-chevron-left fa-lg slider-left" onClick={this.handleLeftSlide}></i>
                    <ul>
                        {videos}
                    </ul>
                    <i className="fas fa-chevron-right fa-lg slider-right" onClick={this.handleRightSlide}></i>
                </div>
                {/* <VideoShowContainer video={video} /> */}
            </section>
        );
    }
}

export default VideoListIndexItems;