import React from 'react';
import VideoIndexItemContainer from "./video_index_item_container";
import VideoShowContainer from './show/video_show_container';

class VideoListIndexItems extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video: null
        }
        this.handleLeftSlide = this.handleLeftSlide.bind(this)
        this.handleRightSlide = this.handleRightSlide.bind(this)
        this.toggleVideoShowClick = this.toggleVideoShowClick.bind(this)
    }

    toggleVideoShowClick(video) {
        return (e) => {
            if (video) {
                return this.setState({video: video});
            } else {
                return this.setState({video: null});
            }
        }
    }

    handleLeftSlide(e) {
        $(`.card-${this.props.listKey}`).animate({
            scrollLeft: "-=800px"
        }, "fast");
    }
    
    handleRightSlide(e) {
        $(`.card-${this.props.listKey}`).animate({
            scrollLeft: "+=800px"
        }, "fast");
    }
    
    render() {
        const videos = this.props.videos.map((video, i) => <VideoIndexItemContainer key={`${video.id}-${i}`} video={video} toggleVideoShowClick={this.toggleVideoShowClick} className="card-content"/>)
        return(
            <div>
                <section className="video-list-wrapper">
                    <h2>{this.props.title}</h2>
                    <div className="video-list">
                        <i className="fas fa-chevron-left fa-lg slider-left" onClick={this.handleLeftSlide}></i>
                        <ul className={`card-${this.props.listKey}`}>
                            {videos}
                        </ul>
                        <i className="fas fa-chevron-right fa-lg slider-right" onClick={this.handleRightSlide}></i>
                    </div>
                </section>
                <VideoShowContainer video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick}/>
            </div>
        );
    }
}

export default VideoListIndexItems;
