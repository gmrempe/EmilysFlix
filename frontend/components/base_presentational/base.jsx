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

    // componentWillMount() {

    // }

    render() {
        let videos = [];
        const contentIds = this.props.contentIds;

        if (contentIds.length > 0) {
            videos = contentIds.map((id) => {
                for (let i = 0; i < this.props.videos.length; i++) {
                    if (this.props.videos[i].id === id) {
                        return <VideoIndexItemContainer key={`listVideo-${i}`} video={this.props.videos[i]} toggleVideoShowClick={this.toggleVideoShowClick} />
                    }
                }
            })
        }
        return (
            <section className="base">
                <ul>
                    {videos}
                </ul>
                <VideoShowContainer video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
            </section>

        )
    }
}

export default Base;