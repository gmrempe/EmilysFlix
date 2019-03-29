import React from 'react';
import {Link} from "react-router-dom";

const VideoIndexItem = ({video}) => (
    <li>
            <div>
                <div>{video.title}</div>
                <Link to={`/watch/${video.id}`}>play</Link>
                <div className="rating">{video.rating}</div>
            </div>
            <div>
                <img src={video.photoUrl}/>
                <button className="mute">mute</button>
                <button className="like-index-item">like</button>
                <button className="dislike-index-item">dislike</button>
                <button className="myList-videoShow">mylist</button>
            </div>
    </li>
)

export default VideoIndexItem;