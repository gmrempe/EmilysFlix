import React from 'react';
import VideoIndexItem from './video_index_item';
import VideoShowContainer from './show/video_show_container';


class VideoListIndexItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video: null
        }
        this.handleLeftSlide = this.handleLeftSlide.bind(this)
        this.handleRightSlide = this.handleRightSlide.bind(this)
        this.onVideoShowClick = this.onVideoShowClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    onVideoShowClick(video) {
        return (e) => {
            return this.setState({video: video});
        }
    }


    handleLeftSlide() {

    }

    handleRightSlide() {

    }
    
    render() {
        const videos = this.props.videos.map(video => <VideoIndexItem key={video.id} video={video} onVideoShowClick={this.onVideoShowClick}/>)
        // debugger
        return(
            <div>
                <section className="video-list-wrapper">
                    <h2>List Title</h2>
                    <div className="video-list">
                        <i className="fas fa-chevron-left fa-lg slider-left" onClick={this.handleLeftSlide}></i>
                        <ul>
                            {videos}
                        </ul>
                        <i className="fas fa-chevron-right fa-lg slider-right" onClick={this.handleRightSlide}></i>
                    </div>
                </section>
                <VideoShowContainer video={this.state.video}/>
            </div>
        );
    }
}

export default VideoListIndexItems;