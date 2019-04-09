import React from 'react';
import {Link, withRouter} from "react-router-dom";

class VideoIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.handlePlayClick = this.handlePlayClick.bind(this)
        this.handleMyListMiniClick = this.handleMyListMiniClick.bind(this);
        this.handleDislikeMiniClick = this.handleDislikeMiniClick.bind(this);
        this.handleLikeMiniClick = this.handleLikeMiniClick.bind(this);
    }

    handlePlayClick() {
        this.props.history.push(`/watch/${this.props.video.id}`);
    }

    handleMyListMiniClick() {
        if (this.props.myListVideoIds.includes(this.props.video.id)) {
            this.props.deleteList(this.props.video.id)
                .then(() => { this.props.fetchUser() })
        } else {
            this.props.createList(this.props.video.id)
                .then(() => { this.props.fetchUser() })
        }
    }

    handleLikeMiniClick() {
        if (this.props.likeVideoIds.includes(this.props.video.id)) {
            this.props.deleteLike(this.props.video.id)
                .then(() => { this.props.fetchUser() })
        } else {
            this.props.createLike(this.props.video.id, "true")
                .then(() => { this.props.fetchUser() })
        }
    }

    handleDislikeMiniClick() {
        if (this.props.dislikeVideoIds.includes(this.props.video.id)) {
            this.props.deleteLike(this.props.video.id)
                .then(() => { this.props.fetchUser() })
        } else {
            this.props.createLike(this.props.video.id, "false")
                .then(() => { this.props.fetchUser() })
        }
    }

    componentDidMount() {
        this.props.fetchAllGenres();
    }

    componentDidUpdate() {
        this.props.myListVideoIds;
    }

    render() {
        const video = this.props.video;
        const propsGenres = this.props.genres
        const toggleVideoShowClick = this.props.toggleVideoShowClick
        let genres = [];
        if (propsGenres.length > 0) {
             genres = video.genreIds.map((id) => {
                for(let i=0; i< propsGenres.length; i++) {
                    if (propsGenres[i].id === id) {
                        return <li key={`genre-${i}`}>{propsGenres[i].name}</li>
                    }
                }
            })
        }

        let myListIconMini = <></>
        if (this.props.myListVideoIds.includes(this.props.video.id)) {
            myListIconMini = <i className="fas fa-check fa-lg"></i>
        } else {
            myListIconMini = <i className="fas fa-plus fa-lg"></i>
        }

        let likeIcon = <></>;
        let dislikeIcon = <></>;
        if (this.props.likeVideoIds.includes(this.props.video.id)) {
            likeIcon = <i className="far fa-thumbs-up fa-lg"></i>;
        } else if (this.props.dislikeVideoIds.includes(this.props.video.id)) {
            dislikeIcon = <i className="far fa-thumbs-down fa-lg"></i>;
        } else {
            likeIcon = <i className="far fa-thumbs-up fa-lg"></i>;
            dislikeIcon = <i className="far fa-thumbs-down fa-lg"></i>;
        }

        return (
            <li className="video-index-item">
                <div className="video-index-button-wrapper">
                    <div className="video-index-buttons">
                        <div className="video-index-left">
                            <i className="far fa-play-circle fa-2x"></i>
                            <div className="title">{video.title}</div>
                            <div className="rating">{video.rating}</div>
                            <ul>{genres}</ul>
                        </div>
                        <div className="video-index-right">
                            {/* <i className="fas fa-volume-mute fa-lg"></i> */}
                            <button className="like-index-item" onClick={this.handleLikeMiniClick}>
                                {likeIcon}
                            </button>
                            <button className="dislike-index-item" onClick={this.handleDislikeMiniClick}>
                                {dislikeIcon}                         
                            </button>
                            <button className="myList-videoShow" onClick={this.handleMyListMiniClick}>
                                {myListIconMini}
                            </button>
                        </div>
                    </div>
                    <button className="video-index-bottom" onClick={toggleVideoShowClick(video)}>
                        <i className="fas fa-chevron-down fa-3x"></i>
                    </button>
                </div>
                <div className="video-index-wrapper" onClick={this.handlePlayClick}>
                    <video width="100%" height="auto" poster={video.imageUrl}>
                        <source src={video.videoUrl} type="video/mp4"/>
                    </video>
                </div>
            </li>
        )
    }
}

export default withRouter(VideoIndexItem);