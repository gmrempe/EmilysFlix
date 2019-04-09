import React from 'react';
import VideoIndexItemContainer from "../browse/video_index_item_container";
import VideoShowContainer from "../browse/show/video_show_container";

class Base extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video: null
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

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    componentDidUpdate() {
        this.state.video;
    }

    render() {
        const contentIds = this.props.contentIds;
        let videos = this.props.videos;
        
        if (videos.length > 0) {
            videos = contentIds.map((id) => {
                for (let i = 0; i < this.props.videos.length; i++) {
                    if (this.props.videos[i].id === id) {
                        return <VideoIndexItemContainer key={`${this.props.keyAddOn}-${i}`} video={this.props.videos[i]} toggleVideoShowClick={this.toggleVideoShowClick} />
                    }
                }
            })
        }

        if (videos.length > 0) {
            return (
                <div className="base-wrapper">
                    <section className="base">
                        <h1>{this.props.title}</h1>
                        <ul>
                            {videos}
                        </ul>
                        <VideoShowContainer video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
                    </section>
                </div>
            )
        } else {
            return (
                <div className="base-wrapper">
                    <section className="base">
                        <h1>{this.props.title}</h1>
                        <p>No Matching Results</p>
                    </section>
                </div>
            )
        }
    }
}

export default Base;