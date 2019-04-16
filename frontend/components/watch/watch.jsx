import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleBackClick() {
        this.props.video = [];
        this.props.history.push('/browse');
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.video_id);
    }

    // componentWillUnmount() {
    //     this.props.video;
    // }

    render() {
        
        if (this.props.video.length > 0) {
        return (
            <div className="movie">
                <div className="back-to-browse-wrapper" onClick={this.handleBackClick}>
                    <i className="fas fa-arrow-left fa-2x"></i>
                    <Link className="back-to-browse" to="/browse">Back to Browse</Link>
                </div>
                <video controls autoPlay>
                    <source src={this.props.video[0].videoUrl} type="video/mp4"/>
                </video>
                {/* <div className="movie-title">
                    <h3>{this.props.video.title}</h3>
                </div> */}
            </div>
        )
        } else {
            return (<>Video is not supported in your browser</>)
        }
    }
}

export default withRouter(Watch);