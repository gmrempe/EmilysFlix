import React from 'react';
import VideoIndexItemContainer from "../video_index_item_container.js";
import VideoShowContainer from "../show/video_show_container";

class MyListIndex extends React.Component {

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

    // componentDidUpdate() {
    //     this.state.video;
    // }

    render()  {
        const myListVideoIds = this.props.myListVideoIds;
        const videos = this.props.videos;
        let myList = [];
        
        if (myListVideoIds.length > 0) {
            myList = myListVideoIds.map((id) => {
                for (let i = 0; i < videos.length; i++) {
                    if (videos[i].id === id) {
                        return <VideoIndexItemContainer key={`myListVideo-${i}`} video={videos[i]} toggleVideoShowClick={this.toggleVideoShowClick}/>
                    }
                }
            })
        }
        
    return (
        <section className="my-list">
            <h1>MyList</h1>
            <ul>
                {myList}
            </ul>
            <VideoShowContainer className="mylist-video-show" video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
        </section>

    )
    }
}

export default MyListIndex;