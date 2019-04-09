import React from "react";
import { Link, withRouter} from "react-router-dom";


class VideoShow extends React.Component  {
    constructor(props) {
        super(props)
        this.handleVideoPlay=this.handleVideoPlay.bind(this);
        this.handleVideoShowSound = this.handleVideoShowSound.bind(this);
        this.handleMyListClick = this.handleMyListClick.bind(this);
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleMyListClick() {
        if (this.props.myListVideoIds.includes(this.props.video.id)) {
            this.props.deleteList(this.props.video.id)
            .then( () => {this.props.fetchUser()})
        } else {
            this.props.createList(this.props.video.id)
            .then( () => {this.props.fetchUser()})
        }
    }

    handleLikeClick() {
        if (this.props.likeVideoIds.includes(this.props.video.id)) {
            this.props.deleteLike(this.props.video.id)
            .then( () => {this.props.fetchUser()})
        } else {
            this.props.createLike(this.props.video.id, true)
            .then( () => {this.props.fetchUser()})
        }
    }

    handleDislikeClick() {
        if (this.props.disLikeVideoIds.includes(this.props.video.id)) {
            this.props.deleteLike(this.props.video.id)
            .then( () => {this.props.fetchUser()})
        } else {
            this.props.createLike(this.props.video.id, false)
            .then( () => {this.props.fetchUser()})
        }
    }

    handleVideoPlay() {
        this.props.history.push(`/watch/${this.props.video.id}`)
    }

    handleVideoShowSound() {
        const button = document.getElementsByClassName("soundButton")
        $(button).find('i').toggleClass('fa-volume-mute fa-volume-up');
        const video = $(".video-show-autoplay")
        if (video.prop('muted')) {
            video.prop('muted', false)
        } else {
            video.prop('muted', true)
        }
    }

    componentDidUpdate() {
        this.props.myListVideoIds
        // this.props.myLikeVideoIds
        // this.props.myDislikeVideoIds
    }

    render() {
    const video = this.props.video;
    const toggleVideoShowClick = this.props.toggleVideoShowClick;
    let myListIcon = <></>;
    let myLikeIcon = <></>;
    let myDislikeIcon = <></>;

    if (video)  {
        if (this.props.myListVideoIds.includes(this.props.video.id)) {
            myListIcon = <i className="fas fa-check fa-lg"></i>
        } else {
            myListIcon = <i className="fas fa-plus fa-lg"></i>
        }

        // if (this.props.myLikeVideoIds.includes(this.props.video.id)) {
        //     myLikeIcon = <i className="far fa-thumbs-up fa-lg"></i>
        // }

        // if (this.props.myDislikeVideoIds.includes(this.props.video.id)) {
        //     myDislikeIcon = <i className="far fa-thumbs-down fa-lg"></i>
        // }
        
        return (
        <div className="videoShow">
            <div className="video-show-buttons">
                <div className="video-show-buttons-left">
                    <h1>{video.title}</h1>
                    <div className="video-show-yr-rating">
                        <div>{video.yr}</div>
                        <div className="rating">{video.rating}</div>
                    </div>
                    <span>
                        {video.description}
                    </span>
                    <nav>
                        <button className="video-show-play">
                            <i className="fas fa-play fa-lg"></i>
                            <Link className="video-show-play-button" to={`/watch/${video.id}`}>PLAY</Link>
                        </button>
                            <button className="myList-videoShow" onClick={this.handleMyListClick}>
                                {myListIcon}
                            MY LIST</button>
                        <button className="like-videoShow">
                            {myLikeIcon}
                        </button>
                        <button className="dislike-videoShow">
                            {myDislikeIcon}
                        </button>
                    </nav>
                    <div>Creators: {video.creator}</div>
                </div>
                <div className="video-show-buttons-right">
                    <button className="videoShow-close" onClick={toggleVideoShowClick(null)}>
                        <i className="fas fa-times fa-2x"></i>
                    </button>
                    <button className="soundButton" onClick={this.handleVideoShowSound}>
                        <i className="fas fa-volume-mute fa-lg"></i>
                    </button>
                </div>
            </div>
            <div className="video-show-video" onClick={this.handleVideoPlay}>
                <video autoPlay className="video-show-autoplay" width="100%" mute ="true" poster={video.imageUrl}>
                        <source src={video.videoUrl} type="video/mp4" />
                </video>
            </div>
            <div className="video-screen"></div>
        </div>
    )
    } else {
        return (<></>)
    }
}
}

export default withRouter(VideoShow);