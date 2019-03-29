import React from "react";
import { Link } from "react-router-dom";


const VideoShow = (video) => (
    <div className="videoShow">
        <div>
            <h1>{video.title}</h1>
            <div>
                <div>{video.yr}</div>
                <div className="rating">{video.rating}</div>
            </div>
            <span>
                {video.description}
            </span>
            <nav>
                <Link to={`/watch/${video.id}`}>play</Link>
                <button className="myList-videoShow">MY LIST</button>
                <button className="like-videoShow">like</button>
                <button className="dislike-videoShow">dislike</button>
            </nav>
        </div>
        <Link to={`/watch/${video.id}`}>hidden play</Link>
        <div>
            <button>minimize</button>
            <button>mute</button>
        </div>
    </div>
)

export default VideoShow;