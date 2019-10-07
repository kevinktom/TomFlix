import React from 'react';
// import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.videoId)
    }

    render(){
        return (
            <div>
                {this.props.video ? <div>
                    <video controls className="mainVideo"> <source src={this.props.video.video_url} type="video/mp4" /> </video> </div> : <p>no video</p>}
            </div>
        )
    }
}

export default VideoShow