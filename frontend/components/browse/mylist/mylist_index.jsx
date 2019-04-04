import React from 'react';
import VideoIndexItemContainer from "../video_index_item_container.js";
import VideoShowContainer from "../show/video_show_container";

class myListIndex extends React.Component {

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

    componentWillMount() {
        // debugger
        // this.setState()??
        this.props.myListVideos
    }

    render()  {
        let videos = [];
        const myListVideoIds = this.props.myListVideoIds;
        debugger

        if (myListVideoIds.length > 0) {
            videos = myListVideoIds.map((id) => {
                debugger
                for (let i = 0; i < this.props.videos.length; i++) {
                    if (this.props.videos[i].id === id) {
                        return <VideoIndexItemContainer key={`myListVideo-${i}`} video={this.props.videos[i]} toggleVideoShowClick={this.toggleVideoShowClick}/>
                    }
                }
            })
        }
    return (
        <section className="my-list">
            <ul>
                {videos}
            </ul>
            <VideoShowContainer video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
        </section>

    )
    }
}

export default myListIndex;