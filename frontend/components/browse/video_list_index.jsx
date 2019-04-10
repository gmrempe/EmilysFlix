import React from 'react';
import VideoListIndexItemsContainer from "./video_list_index_items_container";
import VideoShowContainer from './show/video_show_container';


class VideoListIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video: this.props.video
        }
        this.toggleVideoShowClick = this.toggleVideoShowClick.bind(this)
    }

    toggleVideoShowClick(video) {
        return (e) => {
            if (video) {
                return this.setState({ video: video });
            } else {
                return this.setState({ video: null });
            }
        }
    }

    render() {

        return (
        <div className="browse-main">
            <div className='hero'>
                <VideoShowContainer video={this.props.videos[0]} toggleVideoShowClick={this.toggleVideoShowClick}/>
            </div>
            <div className="after-hero">
                <ul>
                    <VideoListIndexItemsContainer index={0} title="Recently Added"/>
                    <VideoListIndexItemsContainer index={1} title="Popular"/>
                    <VideoListIndexItemsContainer index={2} title="Recommended for You"/>
                    <VideoListIndexItemsContainer index={3} title="Trending Now"/>
                </ul>
            </div>
        </div>
        )
    }
}

export default VideoListIndex;