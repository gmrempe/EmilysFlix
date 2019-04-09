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

    componentDidMount() {
        this.props.fetchAllVideos()
        .then( () => {this.props.fetchGenre(this.props.match.params.genre_id)});
    }

    componentWillUnmount() {
        this.props.genre
    }

    render() {
        const videos = this.props.videos;
        const genre = this.props.genre;
        
        if (genre) {
            const filteredVideos = videos.filter( video => video.genreIds.includes(genre.id));

            const genreVideos = filteredVideos.map((video, i) => {
            return(
                    <VideoIndexItemContainer key={`genreVideo-${i}`} video={video} toggleVideoShowClick={this.toggleVideoShowClick} />
            )
            })
            
            return (
            <section className="genre-show">
                <h1>{genre.name}</h1>
                <ul>
                    {genreVideos}
                </ul>
                <VideoShowContainer className="genre-video-show" video={this.state.video} toggleVideoShowClick={this.toggleVideoShowClick} />
            </section>
            )
        } else {
            return (<section className="genre-show"></section>)
        }
    }
}

export default withRouter(GenreIndex);