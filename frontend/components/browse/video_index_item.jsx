import React from 'react';
import {Link} from "react-router-dom";
// {/* <img width="100%" height="auto" src={video.imageUrl}/> */}

const VideoIndexItem = ({video}) => {
    return (
    <li>
            <div>
                <div>{video.title}</div>
                <Link to={`/watch/${video.id}`}>play</Link>
                <div className="rating">{video.rating}</div>
                <div>Genre</div>
            </div>
                <video width="100" height="auto" poster={video.imageUrl} controls>
                    <source src={video.videoUrl} type="video/mp4"/>
                </video>
            <div>
                <button className="mute">mute</button>
                <button className="like-index-item">like</button>
                <button className="dislike-index-item">dislike</button>
                <button className="myList-videoShow">mylist</button>
            </div>
    </li>
    )
}

export default VideoIndexItem;