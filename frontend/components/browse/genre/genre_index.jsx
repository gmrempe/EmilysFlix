import React from 'react';
import VideoIndexItemContainer from "../video_index_item_container";
import VideoShowContainer from "../show/video_show_container";
import {withRouter} from "react-router-dom";


class GenreIndex extends React.Component {

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



    render() {
        const videos = this.props.videos;
        const genre = this.props.genre[0];
        const filteredVideos = videos.filter( video => video.genreIds.includes(genre.id));
        let genreVideos = [];
        genreVideos = filteredVideos.map((video, i) => {
           return(
                <VideoIndexItemContainer key={`genreVideo-${i}`} video={video} toggleVideoShowClick={this.toggleVideoShowClick} />
           )
           })
        
        debugger
        return (
            <section className="genre-show">
                <h1>{genre.name}</h1>
                <ul>
                    {genreVideos}
                </ul>
                <VideoShowContainer className="genre-video-show" video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
            </section>
        )
    }
}

export default withRouter(GenreIndex);